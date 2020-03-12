import { AuthentificationService } from 'src/app/services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  depots;
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
  }
  onDepot(){
    this.auth.getAllDepot().subscribe(
      data=>{
        this.depots=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )

  }
}
