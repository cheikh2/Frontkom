import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepotComponent } from './components/depot/depot.component';
import { CompteComponent } from './components/compte/compte.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { RoleComponent } from './components/role/role.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    DepotComponent,
    CompteComponent,
    UtilisateurComponent,
    RoleComponent,
    AddUserComponent,
    AddCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
