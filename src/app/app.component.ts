import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EasymdeComponent } from 'ngx-easymde';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('easymde') private readonly easymde: EasymdeComponent;
  demo = '';
  modal = `# This is the editor in a modal
Close the dialog by:

* Pressing the "Escape" key
* Clicking the "Close" button
* Clicking outside of the dialog`
  customize = '';
  autoSaving = '';
  hiddenToolbar = `# This one is bare
You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance. This one also cheks for misspelled words as you type!`;
  eventcontent = `# Event Example
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

  constructor(http: HttpClient, fb: FormBuilder, public ngxSmartModalService: NgxSmartModalService) {
    http
      .get('./assets/demo.md', { responseType: 'text' })
      .subscribe(res => (this.demo = res));
    http
      .get('./assets/autoSaving.md', { responseType: 'text' })
      .subscribe(res => (this.autoSaving = res));
    http
      .get('./assets/customize.md', { responseType: 'text' })
      .subscribe(res => (this.customize = res));

    this.fg = fb.group({
      text: ['# It works here too...'],
    });
  }

  ngAfterViewInit(): void {
    this.easymde.setOptions('lineNumbers', true);
  }

  onBlur(message: string):void {
    alert(message);
  }

  onChange(message: string):void {
    console.log(message);
  }

  onSubmit() {
    console.log(this.fg.value);
  }

  setDisabledForForm() {
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
