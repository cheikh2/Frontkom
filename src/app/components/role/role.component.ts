import { AuthentificationService } from 'src/app/services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles;
  
  constructor(private auth:AuthentificationService) { }

  ngOnInit() {
  }
  onRoles(){
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
}
