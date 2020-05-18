import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EasymdeModule } from '../src/module';
import { EasymdeComponent } from '../src/component';
import { By } from '@angular/platform-browser';

describe('Component: ngx-easymde', () => {
  let fixture: ComponentFixture<any>;
  let context: TestNGComponent;
  let page: PageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, EasymdeModule.forRoot()],
      declarations: [TestNGComponent],
    });
    fixture = TestBed.createComponent(TestNGComponent);
    context = fixture.componentInstance;
    page = new PageObject();
    fixture.detectChanges();
  });
  afterEach(() => context.comp.ngOnDestroy());

  it('should be renderer', () => {
    page.checkCount();
  });

  it('should be change value via ngModel', fakeAsync(() => {
    spyOn(context.comp.Instance, 'value');
    context.value = 'test';
    fixture.detectChanges();
    tick();
    expect(context.comp.Instance.value).toHaveBeenCalled();
  }));

  it('should be throw error when not found easymde object', () => {
    expect(() => {
      delete (window as any).easymde;
      context.options = {};
      fixture.detectChanges();
    }).toThrowError(`Could not find easymde object.`);
  });

  class PageObject {
    getEl(cls: string) {
      return fixture.debugElement.query(By.css(cls));
    }
    checkCount(cls: string = '.CodeMirror', num: number = 1): this {
      expect(document.querySelectorAll(cls).length).toBe(num);
      return this;
    }
  }
});

@Component({
  template:
    '<easymde #comp [(ngModel)]="value" (ngModelChange)="change($event)" [options]="options"></easymde>',
})
class TestNGComponent {
  @ViewChild('comp') comp: EasymdeComponent;
  value: string;
  options: any;
  change(str: string) {}
}
