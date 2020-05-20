# ngx-easymde

Angular for [EasyMDE](https://easymde.tk/) using [ng-zorro-antd](https://ng.ant.design/) components.

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

2. Import the `easymdeModule` in to your root `AppModule`.

```ts
import { EasymdeModule } from 'ngx-easymde';

@NgModule({
  imports: [
    BrowserModule,
    EasymdeModule.forRoot({
      // Global options
      autosave: { enabled: true, uniqueId: '007ebbb2-4705-4fb9-aed4-20327472b119' }
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

3. Add `easymde.min.js` and styles to `angular.json`.

```
"styles": [
  "src/styles.less"
],
"scripts": [
  "node_modules/easymde/dist/easymde.min.js"
]
```

4. Add easymde style.

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

> **NOTICE:** If you need to deploy ICON offline, [download](icons.zip) and change `@easymde-icon-url` the path.

5. Happy coding.

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

# Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/dmcbane/ngx-easymde/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/dmcbane/ngx-easymde/blob/master/LICENSE) file for the full text)
