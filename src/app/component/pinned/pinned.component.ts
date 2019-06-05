import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatDialog} from '@angular/material'
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DataService } from 'src/app/services/data.service';
import { DialogCollabratorsComponent } from '../dialog-collabrators/dialog-collabrators.component';
@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss']
})
export class PinnedComponent implements OnInit {
note:any[]
message:any;
  constructor(private snackBar:MatSnackBar,
    private noteService:NoteService,
    private dialog:MatDialog,
    private dataService:DataService) { }

  ngOnInit() {
  this.getpinned();
  this.dataService.currentMessage.subscribe(
    (response:any)=>{
       this.message=response;
       this.getpinned();
 
    }
 
     )
         
   
  }
  getpinned(){
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
          this.dataService.changeMessage("pinned notes")
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
      noteId:items.id,
      color: items.color
    }
  })
  dialogRef.afterClosed().subscribe(result=>{
    console.log('Pinned Result');
  })
}

opendialogCollab(id: any): void {
  const dialogRef = this.dialog.open(DialogCollabratorsComponent, {
    width: '653px',minHeight: '250px',
     data: {

      noteId: id,
    }

  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('dialog result:${result}');
  });

}
  
}
