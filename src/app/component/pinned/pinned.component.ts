import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss']
})
export class PinnedComponent implements OnInit {
note:any[]
  constructor(private snackBar:MatSnackBar,private noteService:NoteService) { }

  ngOnInit() {
    console.log("pinned notes");
    this.noteService.getRequest("getpinnotes").subscribe(
      (response:any)=>{
        this.note=response,
        console.log(response)
      }
    )
  }

}
