import { LayoutModule } from './layout/layout.module';
import { TasksComponent } from './tasks/tasks.component';
import { AboutModule } from './about/about.module';
import { TasksModule } from './tasks/tasks.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HttpModule, Http } from '@angular/http';

import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
} from 'ng2-translate';

// Módulos de la aplicación
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './about/about.component';

// Módulos de terceros
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: traslationFactory,
      deps: [Http]
    }),
    SharedModule,
    ChartsModule,
    LayoutModule,
    HomeModule,
    TasksModule,
    AboutModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function traslationFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}
