import {
  Component,
  Input,
  forwardRef,
  ElementRef,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  NgZone,
  ViewChild,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { EasymdeConfig, EasymdeOptions } from './config';

declare const EasyMDE: any;

@Component({
  selector: 'easymde',
  template: ` <textarea #easyMarkDownEditor></textarea> `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EasymdeComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EasymdeComponent implements AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {
  @ViewChild('easyMarkDownEditor') private con: ElementRef;
  private instance: any;
  private value: string;

  @Input() options: EasymdeOptions;
  @Input() style: 'default';
  /** delayed initialization */
  @Input() delay: number;
  @Input() disabled: boolean;

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBlur: EventEmitter<string> = new EventEmitter<string>();

  get Instance(): any {
    return this.instance;
  }

  /**
   * Call [setOption](https://codemirror.net/doc/manual.html#setOption) method
   * of Codemirror.
   */
  setOptions(option: string, value: any): void {
    if (!this.instance) return;
    this.instance.codemirror.setOption(option, value);
  }

  constructor(private cog: EasymdeConfig, private zone: NgZone) {
    cog = { ...new EasymdeConfig(), ...cog };
    this.style = cog.style;
    this.delay = cog.delay || 0;
  }

  registerOnChange(fn: any): void {
    if (this.instance) {
      this.instance.codemirror.on('change', fn);
    } else {
      setTimeout(() => this.instance.codemirror.on('change', fn), 1000);
    }
  }

  registerOnTouched(fn: any): void {
    if (this.instance) {
      this.instance.codemirror.on('blur', fn);
    } else {
      setTimeout(() => this.instance.codemirror.on('blur', fn), 1000);
    }
  }

  private initDelay() {
    if (this.delay > 0) {
      setTimeout(() => this.init(), this.delay);
    } else {
      this.init();
    }
  }

  private init() {
    if (typeof EasyMDE === 'undefined') {
      throw new Error(`Could not find EasyMDE object.`);
    }
    this.destroy();
    const config = Object.assign(
      {},
      this.cog,
      this.options,
      this.style === 'default'
        ? {
            spellChecker: true,
            autoDownloadFontAwesome: false,
          }
        : {},
    );
    config.element = this.con.nativeElement;
    this.zone.runOutsideAngular(() => {
      this.instance = new EasyMDE(config);
      if (this.value) {
        this.instance.value(this.value);
      }
      this.instance.codemirror.on('blur', () => {
        this.value = this.instance.value();
        this.zone.run(() => {
          this.onBlur.emit(this.value);
        });
      });
      this.instance.codemirror.on('change', () => {
        this.value = this.instance.value();
        this.zone.run(() => {
          this.onChange.emit(this.value);
        });
      });
      this.setDisable();
    });
  }

  private destroy() {
    if (this.instance) {
      this.instance.toTextArea();
      this.instance = null;
    }
  }

  private setDisable() {
    if (this.instance) {
      this.zone.runOutsideAngular(() => (this.instance.codemirror.options.readOnly = this.disabled));
    }
  }

  ngAfterViewInit(): void {
    this.initDelay();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (changes.options && !changes.options.firstChange) this.initDelay();
  }

  ngOnDestroy() {
    this.destroy();
  }

  writeValue(value: string): void {
    this.value = value;
    if (this.instance) {
      this.instance.value(this.value);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.setDisable();
  }
}
