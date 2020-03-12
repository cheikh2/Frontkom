import { environment } from './../../../environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUser:FormGroup;
roles;
  constructor(private auth: AuthentificationService, private route:Router) { }

  ngOnInit() {
    this.addUser= new FormGroup({
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
  onSaveUser(data){


    console.log(this.addUser.value);
  let user ={
    username:this.addUser.value.username,
    password:this.addUser.value.password,
    role:this.addUser.value.role,
    isactive:this.addUser.value.isActive,
    nomComplet:this.addUser.value.nomComplet
  };
  this.auth.postUser(user).subscribe(
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
  /*<div class="form-group">
            <label for="">Role</label>
            <select formControlName="role"> 
              <option value="/api/roles/{{role.id}}" *ngFor="let role of roles">{{role.libelle}}</option>
            </select> 
            </div>*/
}
