import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.scss']
})
export class AddCompteComponent implements OnInit {
  addCompte:FormGroup;
roles;
  constructor(private auth: AuthentificationService, private route:Router) { }

  ngOnInit() {
    this.addCompte= new FormGroup({
      montant: new FormControl(''),
      ninea: new FormControl(''),
      rc: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      isActive: new FormControl(''),
      role: new FormControl(''),
      nomComplet: new FormControl('')
    });

    this.auth.getRoles().subscribe(
      data=>{
        this.roles=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )

  }
  onSaveCompte(data){


    console.log(this.addCompte.value);
  let compte ={
    montant:this.addCompte.value.montant,
    ninea:this.addCompte.value.ninea,
    rc:this.addCompte.value.rc,
    username:this.addCompte.value.username,
    password:this.addCompte.value.password,
    role:this.addCompte.value.role,
    isactive:this.addCompte.value.isActive,
    nomComplet:this.addCompte.value.nomComplet,
    numCompte:this.addCompte.value.numCompte,
    createdAt:this.addCompte.value.createdAt
  };
  this.auth.postCompte(compte).subscribe(
    data=>{
      console.log(data);
    /*  localStorage.setItem("token",data.token);
      this.route.navigate(['utilisateur']);*/
    },
    error=>{
      console.log(error);
    }
  )
  }

}
