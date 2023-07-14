import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/logoBar/navbar.component';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadExcursaoComponent } from './pages/cad-excursao/cad-excursao.component';
import { CadFormaturaComponent } from './pages/cad-formatura/cad-formatura.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TelaLoginComponent,
    HomeComponent,
    CadExcursaoComponent,
    CadFormaturaComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
