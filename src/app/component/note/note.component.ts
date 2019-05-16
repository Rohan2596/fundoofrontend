import { Component, OnInit, } from '@angular/core';
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog,} from "@angular/material";
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',

  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
 note:any[];
data:any[];
  constructor(private snackBar:MatSnackBar,
    private noteservice:NoteService,
    private dialog:MatDialog,
   
    ) { }

ngOnInit() {
  
console.log("note created");
this.noteservice.getRequest("getnotes").subscribe(
  (response: any) => {
 this.note=response,
 console.log(response)
  })                  
  }
openDialog(items:any):void{
  const dialogRef=this.dialog.open(DialogBoxComponent,{
      data: { title:items.title,
              description:items.description,
              noteId:items.id}
    });
  dialogRef.afterClosed().subscribe(result=>{
    console.log('dialog result:${result}');
  });

}
pin(items){
  console.log("pinned");
  this.noteservice.putRequest("notes/pin?id="+items.id,"").subscribe(
    (response:any)=>{
      if(response.statusCode==10){
        this.snackBar.open(
          "Note is pinned",
          "Undo"
        )

      }else{
        this.snackBar.open(
          "Note not pinned",
          "undo"
        )

      }
    }
  )
}

}
