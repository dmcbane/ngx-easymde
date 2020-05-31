import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EasymdeModule } from 'ngx-easymde';

import { AppComponent } from './app.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EasymdeModule.forRoot({}),
    NgxSmartModalModule.forRoot(),
    MarkdownModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
