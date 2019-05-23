import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material";
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-trash-box',
  templateUrl: './trash-box.component.html',
  styleUrls: ['./trash-box.component.scss']
})
export class TrashBoxComponent implements OnInit {
notes:any[];
note:any;
message:any;
@Input() noteData:any;
  constructor(private snackBar:MatSnackBar,
    private noteservice:NoteService,
    private dataService:DataService
    ) { }

  ngOnInit() {

this.gettrash();
this.dataService.currentMessage.subscribe(
  (response:any)=>{
    this.message=response;
    this.gettrash();

  }
)
  
  }
  
gettrash(){
  console.log("trash notes");
  this.noteservice.getRequest("gettrashnotes").subscribe(
    (response:any)=>{
      this.note=response,
      
      console.log(response)
    }
  )
}

  perDelete(items){
    console.log("delete notes permanently");
    console.log("Delete"+items.id);
    this.noteservice.deleteRequest("deletenotes?id="+items.id).subscribe(
      (response:any)=>{
              if(response.statusCode===10){
                console.log();
                this.dataService.changeMessage("Detele permantly");
                this.snackBar.open(
                  "Note moved to trash",
                  "undo",
                  {duration:2500}
                )
      
              }else{
                this.snackBar.open(
                  "Notes trash  failed",
                  "undo",
                )
              }
              
            }
          )
    
  }
  onRestore(items){
    console.log("notes restore");
     console.log(items);
    // console.log("Restore Notes"+items.id);
    console.log()
    this.noteservice.putRequest("notes/trash?id="+items.id,'').subscribe(
      (response:any)=>{
        if(response.statusCode===10){
          this.dataService.changeMessage("Restore");
          this.snackBar.open("Notes Restored", "undo",
          {duration:2500}
          )
          

        }else{
          this.snackBar.open(
            "Notes restored FAILED",
            "Undo",
            )

        }
      }
    )
  }


}
