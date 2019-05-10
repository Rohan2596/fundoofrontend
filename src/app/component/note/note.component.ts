import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
note:any[]
  constructor(private snackBar:MatSnackBar,private noteservice:NoteService) { }

ngOnInit() {
  
console.log("note created");
this.noteservice.getRequest("getnotes").subscribe(
  (response: any) => {
 this.note=response,
 console.log(response)
  })
  }

}
