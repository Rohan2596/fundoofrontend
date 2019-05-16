import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatDialog} from '@angular/material'
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss']
})
export class PinnedComponent implements OnInit {
note:any[]
  constructor(private snackBar:MatSnackBar,
    private noteService:NoteService,
    private dialog:MatDialog) { }

  ngOnInit() {
    console.log("pinned notes");
    this.noteService.getRequest("getpinnotes").subscribe(
      (response:any)=>{
        this.note=response,
        console.log(response)
      }
    )
  }
  unpinned(items){
    console.log("unpinned");
    console.log(items)
    this.noteService.putRequest("notes/pin?id="+items.id,'').subscribe(
      (response:any)=>{
        if(response.statusCode==10){
          this.snackBar.open("Note  Unpinned","undo",{duration:2500})
        }else{
          this.snackBar.open("Note  Unpining FAILED","undo",{duration:2500})
        }
      }
    )
  }
openDialog(items:any):void{
  const dialogRef=this.dialog.open(DialogBoxComponent,{
    data:{
      title:items.title,
      description:items.description,
      noteId:items.id
    }
  })
  dialogRef.afterClosed().subscribe(result=>{
    console.log('Pinned Result');
  })
}
  
}
