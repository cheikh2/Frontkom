import { User } from './../models/user';
import { Depot } from './../models/depot';
import { Role } from './../models/role';
import { Compte } from './../models/compte';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;
 

  constructor(private httpClient:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   }
   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  getConnexion(user:User){
    console.log(environment.apiUrl);
  return this.httpClient.post<User>(`${environment.apiUrl}/login_check`,user).
  pipe(map(user => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
}));

  }
  postUser(user:User){
    console.log(environment.apiUrl);
    return this.httpClient.post<User>(`${environment.apiUrl}/api/users`,user);
  }

getAllDepot(){
  return this.httpClient.get<Depot>(`${environment.apiUrl}/api/depots`);
}
  getRoles(){
    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);

  }

  postCompte(compte:Compte){
    console.log(environment.apiUrl);
    return this.httpClient.post<Compte>(`${environment.apiUrl}/api/comptes`,compte);
  }
  getComptes(){
    return this.httpClient.get<Compte>(`${environment.apiUrl}/api/comptes`);

  }
  
  getUser(){
    return this.httpClient.get<User>(`${environment.apiUrl}/api/users`);

  }

  getStatus(user:User){
     return this.httpClient.put<User>(`${environment.apiUrl}/api/bloqueUser/${user.id}`,user);
  
    }
  
 /* deleteUser(url){
    return this.httpClient.delete(url);
  }*/
}

