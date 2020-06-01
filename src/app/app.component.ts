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
  demoCode = `
Template snippet:

\`\`\`html
<easymde [(ngModel)]="demo"></easymde>
\`\`\`
`;
  modal = `# This is the editor in a modal
Close the dialog by:

* Pressing the "Escape" key
* Clicking the "Close" button
* Clicking outside of the dialog`;
  modalCode = `
Template snippet:

\`\`\`html
<button class="btn btn-primary" (click)="ngxSmartModalService.getModal('exampleModal').open()">Display Dialog</button>
<ngx-smart-modal #exampleModal identifier="exampleModal">
  <easymde [(ngModel)]="modal"></easymde>
  <button (click)="exampleModal.close()">Close</button>
</ngx-smart-modal>
\`\`\`
  `;
  customize = '';
  customizeCode = `
Template snippet:

\`\`\`html
<easymde
  [(ngModel)]="customize"
  [options]="{ toolbar: ['bold', 'italic', 'heading', '|', 'quote', '|', 'preview'] }">
</easymde>
\`\`\`
  `;
  autoSaving = '';
  autoSavingCode = `
Template snippet:

\`\`\`html
<easymde id="ndx-easymde-autosave-demo" #easymde [(ngModel)]="autoSaving" [options]="autoSavingOptions"></easymde>
\`\`\`

Typescript snippet:

\`\`\`typescript
  autoSavingOptions = {
    autosave: { enabled: true, delay: 1000, uniqueId: 'ndx-easymde-autosave-demo' },
    renderingConfig: {
      codeSyntaxHighlighting: true,
    },
  };
\`\`\`
  `;
  hiddenToolbar = `# This one is bare
You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance. This one also cheks for misspelled words as you type!`;
  hiddenToolbarCode = `
Template snippet:

\`\`\`html
<easymde
  [(ngModel)]="hiddenToolbar"
  [options]="{ toolbar: false, status: false, renderingConfig: { codeSyntaxHighlighting: true } }">
</easymde>
\`\`\`
  `;
  eventContent = `# Event Example
Make changes to see the event handler fire`;
  eventContentCode = `
Template snippet:

\`\`\`html
<easymde
  [(ngModel)]="eventContent"
  (onChange)="onChange($event)"
  (onBlur)="onBlur($event)">
</easymde>
\`\`\`

Typescript snippet:

\`\`\`typescript
  onBlur(message: string):void {
    alert(message);
  }

  onChange(message: string):void {
    console.log(message);
  }
\`\`\`
  `;
  reactiveFormsCode = `
Template snippet:

\`\`\`html
<form [formGroup]="fg" (ngSubmit)="onSubmit()">
  <easymde
    formControlName="text"
    [options]="{ hideIcons: ['side-by-side'], renderingConfig: { codeSyntaxHighlighting: true } }">
  </easymde>
  <button class="btn btn-primary" type="submit" [disabled]="fg.invalid">Submit</button>
  <button class="btn" (click)="setDisabledForForm()">{{this.buttonText}}</button>
</form>
\`\`\`

Typescript snippet:

\`\`\`typescript
    this.fg = fb.group({
      text: ['# Also from a reactive form...'],
    });
\`\`\`
  `;

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
