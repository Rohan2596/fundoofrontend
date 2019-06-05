import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/services/note-service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-collabs-display',
  templateUrl: './collabs-display.component.html',
  styleUrls: ['./collabs-display.component.scss']
})
export class CollabsDisplayComponent implements OnInit {
@Input() noteData:any;
  data: any;
  collablist: any;
  message:string;

  constructor(private snackBar:MatSnackBar,private noteService:NoteService,private dataService:DataService) { }

  ngOnInit() {
    this.getcollablist();
this.dataService.currentMessage.subscribe(
  (response: any) => {
    this.message = response;
   this.getcollablist();

 }
)

  }
getcollablist(){
  console.log(this.noteData.id)
  this.noteService.getRequest('getallcollablist?noteid=' + this.noteData.id).subscribe(
    (response: any) => {
   this.collablist = response;
   console.log(response);
    });
}
}
