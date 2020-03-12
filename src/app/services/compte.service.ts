import { AuthentificationService } from 'src/app/services/authentification.service';
import { HttpClient } from '@angular/common/http';
import { Compte } from './../models/compte';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  
  constructor(private httpClient:HttpClient, private auth:AuthentificationService) { }
 /* getComptes(){
    return this.httpClient.get<Compte>(`${environment.apiUrl}/api/comptes`);

  }*/
}
