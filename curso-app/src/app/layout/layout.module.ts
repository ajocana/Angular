import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from 'ng2-translate';
import { LanguageComponent } from './language/language.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterTestingModule, TranslateModule, FormsModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LanguageComponent
  ],
  exports: [HeaderComponent, FooterComponent, MenuComponent]
})
export class LayoutModule {}
