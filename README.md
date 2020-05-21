# ngx-easymde

Angular wrapper for the [EasyMDE](https://easymde.tk/) markdown editor.  Originally derived from [Angular for simplemde(Markdown Editor)](https://cipchk.github.io/ngx-simplemde/)

[![NPM version](https://img.shields.io/npm/v/ngx-easymde.svg)](https://www.npmjs.com/package/ngx-easymde)
[![Build Status](https://travis-ci.org/dmcbane/ngx-easymde.svg?branch=master)](https://travis-ci.org/dmcbane/ngx-easymde)

## Usage & Demo

- [Live Demo](https://dmcbane.github.io/ngx-easymde/)
- [Stackblitz](https://stackblitz.com/edit/ngx-easymde)

## Installation instructions

1. Install `ngx-easymde` from `npm`

   ```bash
   yarn add ngx-easymde --save
   ```

1. Import the `EasymdeModule` in to your root `AppModule`.

   ```ts
   import { EasymdeModule } from 'ngx-easymde';

   @NgModule({
     imports: [
       BrowserModule,
       EasymdeModule.forRoot({
         // Global options
         autosave: { enabled: true, uniqueId: '<DOM Element ID>' }
       })
     ],
     declarations: [AppComponent],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

1. Add `easymde.min.js` and styles to `angular.json`.

   ```json
   "styles": [
     "src/styles.less"
   ],
   "scripts": [
     "node_modules/easymde/dist/easymde.min.js"
   ]
   ```

1. Add easymde style.

   ```less
   // src/style.less
   @import '~ngx-easymde/lib/index.less';
   // Change existing parameters here:
   @easymde-icon-url: 'icons.zip';
   @easymde-statusbar-lines: 'lines:';
   @easymde-statusbar-words: 'words:';
   @easymde-statusbar-characters: 'chars ：';
   @easymde-statusbar-counts: 'count ：';
   ```

1. Enjoy!

   ```ts
   import { Component, ViewChild, OnInit } from '@angular/core';
   import { EasymdeComponent, EasymdeOptions } from 'ngx-easymde';

   @Component({
     selector: 'app-root',
     template: `
     <easymde [(ngModel)]="demo" [disabled]="false"></easymde>
     <easymde #easymde [(ngModel)]="customize" [options]="options"></easymde>
     `,
   })
   export class AppComponent implements OnInit {
     @ViewChild('easymde', { static: true }) private readonly easymde: EasymdeComponent;

     options: EasymdeOptions = {
       toolbar: ['bold', 'italic', 'heading', '|', 'quote']
     };

     ngOnInit(): void {
       this.easymde.setOptions('lineNumbers', true);
     }
   }
   ```

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/dmcbane/ngx-easymde/issues) board to report bugs and feature requests; we will not respond to email submissions.
2. Please **always** provide the steps to reproduce the error.  That way we can focus on fixing the bug, not trying to reproduce it.

Thanks for understanding!

## MIT License

See the [LICENSE](https://github.com/dmcbane/ngx-easymde/blob/master/LICENSE) file for the full text.
