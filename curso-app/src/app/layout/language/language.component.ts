import { Language, LanguageModel } from './../../shared/masters.models';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languageArray: Array<Language>;
  selectedLanguage: Language;

  constructor(public translate: TranslateService) {
    this.selectedLanguage = { name: 'Español', code: 'es' };
    let languageModel: LanguageModel = new LanguageModel();

    this.languageArray = languageModel.languages;
    this.translate.use('es');
  }

  ngOnInit() {}

  selectLanguage() {
    this.translate.use(this.selectedLanguage.code);
  }
}
