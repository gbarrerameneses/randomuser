import { Component, OnInit } from '@angular/core';
import { RandomuserService } from '../randomuser.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  userData: any; // Declare a variable to hold the user data

  constructor(private randomuser:RandomuserService) {}

  ngOnInit(): void {
    this.loadData()
  }

  public loadData(){
    this.randomuser.get('https://randomuser.me/api/')
    .subscribe(respuesta => {
      this.userData = respuesta; // Assuming results is an array with user data
      // console.log('userData -->', this.userData);
    })
  }

}
