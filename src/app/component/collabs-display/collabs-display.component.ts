import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/services/note-service';

@Component({
  selector: 'app-collabs-display',
  templateUrl: './collabs-display.component.html',
  styleUrls: ['./collabs-display.component.scss']
})
export class CollabsDisplayComponent implements OnInit {
@Input() noteData:any;
  data: any;
  collablist: any;

  constructor(private snackBar:MatSnackBar,private noteService:NoteService) { }

  ngOnInit() {
this.getcollablist();
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
