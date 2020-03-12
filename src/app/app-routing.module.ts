import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RoleComponent } from './components/role/role.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { CompteComponent } from './components/compte/compte.component';
import { DepotComponent } from './components/depot/depot.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'login',component:ConnexionComponent},
  {path:'depot',component:DepotComponent},
  {path:'compte',component:CompteComponent},
  {path:'utilisateur',component:UtilisateurComponent},
  {path:'role',component:RoleComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'addCompte',component:AddCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
