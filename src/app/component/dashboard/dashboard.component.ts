import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationGuard } from '../../services/AuthGuard';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { MatDialog, } from '@angular/material';
import { DialogProfileComponent } from  '../dialog-profile/dialog-profile.component';
import { NoteService } from 'src/app/services/note-service';
import { DataService } from 'src/app/services/data.service';
import { ViewService } from 'src/app/services/view.service';

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

toggle:boolean=true;

  constructor(private authGuard: AuthenticationGuard,
              private router: Router,
              private dialog: MatDialog,
              private noteService:NoteService,
              private dataService:DataService,
              private view :ViewService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.email = localStorage.getItem('email');
   this.header ='FundooApp';
  }
  onlogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
  trashbox() {
    this.router.navigate(['/dashboard/trash']);
    this.header ='Trash';

  }
  archivebox() {
    this.router.navigate(['/dashboard/archive']);
    this.header = 'Archive'
  }
  notes() {
    this.router.navigate(['/dashboard/note']);
    this.header ='Notes';

  }
  remainder(){
    this.router.navigate(['/dashboard/reminder']);
    this.header='Reminder'
  }
  profilePic(): void {
    const dialogRef = this.dialog.open(DialogProfileComponent, {height: '400px',
    width: '800px', });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
  }
  onSerach(message: string) {
    this.noteService.getRequest("elasticSearch/getnotesbytitle?query=" + message).subscribe(
      (response: any) => {
        // this.obtainNotes.next(response);
        console.log(response);  
        this.dataService.changeMessage(response);
        this.router.navigate(['/dashboard/search']);
      }
    );
}

list() {
  this.toggle = false;
  this.view.gridview(this.toggle);
  console.log(this.toggle);
  
  
  }
  grid() {
  this.toggle = true;
  this.view.gridview(this.toggle);
  console.log(this.toggle);
  
  }

}
