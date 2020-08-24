// Copyright (c) 2020 Cody Rivera
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
} from '@angular/core';

import { Ace, edit } from 'ace-builds';
import 'ace-builds/src-noconflict/theme-github';

const THEME = 'ace/theme/github';

@Component({
    selector: 'app-grammar-playground',
    templateUrl: './grammar-playground.component.html',
    styleUrls: ['./grammar-playground.component.scss'],
})
export class GrammarPlaygroundComponent implements OnInit, AfterViewInit {
    @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
    private codeEditor: Ace.Editor;

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        const element = this.codeEditorElmRef.nativeElement;
        const editorOptions: Partial<Ace.EditorOptions> = {
            highlightActiveLine: true,
            minLines: 10,
            maxLines: Infinity,
        };

        this.codeEditor = edit(element, editorOptions);
        this.codeEditor.setTheme(THEME);
        this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
    }
}
