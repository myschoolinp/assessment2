import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,) { }

  ngOnInit() {
  }
  // for login
  productLogin(role: string) {
    let obj: any = { role: role };
    localStorage.setItem('userData', JSON.stringify(obj));
    if (role == 'admin') {
      this.router.navigate(['adminpanel']);
    } else if (role == 'user') {
      this.router.navigate(['user']);
    }
  }


}
