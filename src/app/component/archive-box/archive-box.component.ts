import { Component, OnInit } from '@angular/core';
import {MatSnackBar  } from "@angular/material";
import { NoteService } from "../../services/note-service";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-archive-box',
  templateUrl: './archive-box.component.html',
  styleUrls: ['./archive-box.component.scss']
})
export class ArchiveBoxComponent implements OnInit {
note:any;  
message:any;
constructor(private snackbar:MatSnackBar,
  private noteService:NoteService,
  private dataService:DataService) { }

  ngOnInit() {
  this.getarchive();
  this.dataService.currentMessage.subscribe(
    (response:any)=>{
      this.message=response;
      this.getarchive();
    }
  )
  }
  getarchive(){
    console.log("Arcieve notes");
    this.noteService.getRequest("getarchivenotes").subscribe(
      (response:any)=>{
        this.note=response,
        console.log(response)
      }
    ) 
  }

  pin(items){
    console.log("pinned");
    this.noteService.putRequest("notes/pin?id="+items.id,"").subscribe(
      (response:any)=>{
        if(response.statusCode==10){
          this.dataService.changeMessage("pinned notes");
          this.snackbar.open(
            "Note is pinned",
            "Undo"
          )
  
        }else{
          this.snackbar.open(
            "Note not pinned",
            "undo"
          )
  
        }
      }
    )
  }

}
