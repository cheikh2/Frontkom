import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

  formConnexion:FormGroup;
  constructor(private auth: AuthentificationService, private route:Router) { 
  }

  ngOnInit() {
    this.formConnexion= new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
    

    }

    onConnexion(){
  console.log(this.formConnexion.value);
  let user ={
    username:this.formConnexion.value.username,
    password:this.formConnexion.value.password,
    roles:this.formConnexion.value.roles,
  };
  this.auth.getConnexion(user).subscribe(
    data=>{
      console.log(data);
      localStorage.setItem("token",data.token);
      this.route.navigate(['utilisateur']);
    },
    error=>{
      console.log(error);
    }
  )

    }
  

}
