// Copyright (c) 2020 Cody Rivera
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrammarPlaygroundComponent } from './grammar-playground/grammar-playground.component';

const routes: Routes = [
    { path: 'index', component: GrammarPlaygroundComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
