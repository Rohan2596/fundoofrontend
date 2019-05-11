import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material";
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
note:any[]
  constructor(private snackBar:MatSnackBar,
    private noteservice:NoteService,
    private dialog:MatDialog) { }

ngOnInit() {
  
console.log("note created");
this.noteservice.getRequest("getnotes").subscribe(
  (response: any) => {
 this.note=response,
 console.log(response)
  })
  }
openDialog(){
  const dialogRef=this.dialog.open(DialogBoxComponent);
  dialogRef.afterClosed().subscribe();
}

}
