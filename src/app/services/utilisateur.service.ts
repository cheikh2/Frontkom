import { AuthentificationService } from 'src/app/services/authentification.service';
import { User } from './../models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient:HttpClient, private auth:AuthentificationService) { }
  getUser(){
    return this.httpClient.get<User>(`${environment.apiUrl}/api/users`);

  }
}
