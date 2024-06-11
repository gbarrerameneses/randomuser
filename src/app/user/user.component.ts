import { Component, OnInit } from '@angular/core';
import { UserPlaceholderService } from '../user-placeholder.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userPlaceholder: any;
  constructor(private userService: UserPlaceholderService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  public loadUser(){
    this.userService.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(respuesta => {
      this.userPlaceholder = respuesta;
      console.log('respuesta --> ', respuesta);
    })
  }
}
