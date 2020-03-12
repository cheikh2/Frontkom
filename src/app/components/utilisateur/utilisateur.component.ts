import { User } from './../../models/user';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  users;
  user:User;
  
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.onUser();
  }
  onUser(){
    this.auth.getUser().subscribe(
      data=>{
        this.users=data["hydra:member"]
        //console.log(data["hydra:member"]
    }  ,
        error=>{
          alert('Veuillez vous authentifiez');
         // console.log(error);
        }
    )
  }


  onActive(u){
    
    this.auth.getStatus(u).subscribe(
      data=>{
        alert(JSON.stringify(data));
        this.auth.getUser().subscribe(
          data=>{
            this.users=data["hydra:member"]
            //console.log(data["hydra:member"]
        }  ,
            error=>{
              alert('Veuillez vous authentifiez');
             // console.log(error);
            }
        )
      })
      
      }
 
}
