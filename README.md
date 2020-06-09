# ngx-easymde

An Angular wrapper for the [Easy MarkDown Editor](https://easymde.tk/) originally derived from [Angular for simplemde(Markdown Editor) by 卡色 cipchk](https://cipchk.github.io/ngx-simplemde/).

[![NPM version](https://img.shields.io/npm/v/ngx-easymde.svg)](https://www.npmjs.com/package/ngx-easymde)
[![Build Status](https://travis-ci.org/dmcbane/ngx-easymde.svg?branch=master)](https://travis-ci.org/dmcbane/ngx-easymde)

## Usage & Demo

- [Live Demo](https://dmcbane.github.io/ngx-easymde/)
- [Stackblitz](https://stackblitz.com/edit/ngx-easymde)

## Installation instructions

1. Install `ngx-easymde` from `npm`

   ```bash
   npm add ngx-easymde --save
   ```

1. Import the `EasymdeModule` into your root `AppModule` (`app.module.ts`).

   ```typescript
   import { EasymdeModule } from 'ngx-easymde';

   @NgModule({
     imports: [
       BrowserModule,
       EasymdeModule.forRoot()
     ],
     declarations: [AppComponent],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

   To set global options, pass them to the `forRoot` function.

   ```typescript
       EasymdeModule.forRoot({
         options: {
           autosave: { enabled: true, delay: 10000 },
           hideIcons: ['side-by-side'],
           renderingConfig: { codeSyntaxHighlighting: true },
         },
       }),
    ```

1. Add `easymde.min.js` and styles to `angular.json`.

   ```json
   "styles": [
     "node_modules/easymde/dist/easymde.min.css",
     "src/styles.scss"
   ],
   "scripts": [
     "node_modules/easymde/dist/easymde.min.js"
   ]
   ```

1. Add easymde style.

   ```scss
   // src/style.scss
   @import '~ngx-easymde/lib/index.scss';
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
