// Copyright (c) 2020 Cody Rivera
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material-module';
import { GrammarPlaygroundComponent } from './grammar-playground/grammar-playground.component';

@NgModule({
    declarations: [AppComponent, GrammarPlaygroundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
