import { Component, OnInit } from '@angular/core';
import { AuthenticationGuard } from '../../services/AuthGuard';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { MatDialog, } from '@angular/material';
import { DialogProfileComponent } from  '../dialog-profile/dialog-profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
email: string;
token: string;
title: string;
header: string;
login: Login = new Login();
  constructor(private authGuard: AuthenticationGuard,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.email = localStorage.getItem('email');
   this.header ="FundooApp";
  }
  onlogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
  trashbox() {
    this.router.navigate(['/dashboard/trash']);
    this.header ="Trash";

  }
  archivebox() {
    this.router.navigate(['/dashboard/archive']);
    this.header="Archive"
  }
  notes() {
    this.router.navigate(['/dashboard/note']);
    this.header ="Notes";

  }
  profilePic(): void {
    const dialogRef = this.dialog.open(DialogProfileComponent, {height: '400px',
    width: '800px', });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
  }
}
