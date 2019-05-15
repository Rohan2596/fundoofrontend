import { Component, OnInit } from '@angular/core';
import { AuthenticationGuard } from "../../services/AuthGuard";
import { Login } from "../../models/login";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
email:string
token:string
login:Login=new Login()
  constructor(private authGuard:AuthenticationGuard,
    private router:Router) { }

  ngOnInit() {
    this.token=localStorage.getItem('token')
    this.email=localStorage.getItem('email')
  }
  onlogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
     this.router.navigate(['/login']);
  }
  trashbox(){
    this.router.navigate(['/dashboard/trash']);
    
  }
  archivebox(){
    this.router.navigate(['/dashboard/archive']);
  }
  notes(){
    this.router.navigate(['/dashboard/note'])
  }
}
