import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {
  constructor(private userService: UserService) {}
  token = '';
  ngOnInit() {
    
  }

  signIn() {
    this.userService.signIn('teo@gmail.com', '321')
    .then(response => {
      this.token = response.user.token;
      localStorage.setItem('token', this.token);
    });
  }
}
