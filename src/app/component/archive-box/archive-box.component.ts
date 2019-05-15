import { Component, OnInit } from '@angular/core';
import {MatSnackBar  } from "@angular/material";
import { NoteService } from "../../services/note-service";
@Component({
  selector: 'app-archive-box',
  templateUrl: './archive-box.component.html',
  styleUrls: ['./archive-box.component.scss']
})
export class ArchiveBoxComponent implements OnInit {
note:any;  

constructor(private snackbar:MatSnackBar,private noteService:NoteService) { }

  ngOnInit() {

    console.log("Arcieve notes");
  this.noteService.getRequest("getarchivenotes").subscribe(
    (response:any)=>{
      this.note=response,
      console.log(response)
    }
  )
  }

}
