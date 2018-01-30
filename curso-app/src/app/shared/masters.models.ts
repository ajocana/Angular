import { LANGUAGES } from './masters.properties';
export interface Language {
  name: string;
  code: string;
}

// No la vamos a usar. La dejamos por el comentario para tener una idea de cómo inicializar.
export class LanguageModel2 implements Language {
  // Al definir el constructor de esta manera conseguimos que
  // directamente se inicialicen las variables de la interfaz
  constructor(public name: string, public code: string) {}
}

export class LanguageModel {
  languages: Array<Language>;
  constructor() {
    this.languages = new Array<Language>();
    this.getDatos();
  }

  getDatos() {
    this.languages = LANGUAGES;
  }
}
