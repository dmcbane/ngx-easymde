import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EasymdeComponent } from 'ngx-easymde';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('easymde') private readonly easymde: EasymdeComponent;
  demo = '';
  customize = '';
  autoSaving = '';
  hiddenToolbar = `# This one is bare
You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance. This one also cheks for misspelled words as you type!`;
  eventContent = `# Event Example
Make changes to see the event handler fire`;
  fg: FormGroup;
  formDisabled = false;
  buttonText = 'Disable Form';

  autoSavingOptions = {
    autosave: { enabled: true, delay: 1000, uniqueId: 'ndx-easymde-autosave-demo' },
    renderingConfig: {
      codeSyntaxHighlighting: true,
    },
  };

  isVisible = false;

  constructor(http: HttpClient, fb: FormBuilder) {
    http.get('./assets/demo.md', { responseType: 'text' }).subscribe((res) => (this.demo = res));
    http.get('./assets/autoSaving.md', { responseType: 'text' }).subscribe((res) => (this.autoSaving = res));
    http.get('./assets/customize.md', { responseType: 'text' }).subscribe((res) => (this.customize = res));

    this.fg = fb.group({
      text: ['# Also from a reactive form...'],
    });
  }

  ngAfterViewInit(): void {
    this.easymde.setOptions('lineNumbers', true);
  }

  onBlur(message: string): void {
    alert(message);
  }

  onChange(message: string): void {
    console.log(message);
  }

  onSubmit(): void {
    console.log(this.fg.value);
  }

  setDisabledForForm(): void {
    this.formDisabled = !this.formDisabled;
    if (this.formDisabled) {
      this.fg.controls.text.disable();
      this.buttonText = 'Enable Form';
    } else {
      this.fg.controls.text.enable();
      this.buttonText = 'Disable Form';
    }
  }
}
