import { AuthentificationService } from 'src/app/services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  comptes;
  constructor(private auth:AuthentificationService) { }

  ngOnInit() {
  }
  onComptes(){
    this.auth.getComptes().subscribe(
      data=>{
        this.comptes=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )

  }
  onGetDepots(com){
    console.log(com);

  }
}
