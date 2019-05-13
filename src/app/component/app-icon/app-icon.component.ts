import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NoteService } from "src/app/services/note-service";
@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {
@Input() noteData:any;
  constructor(private snackBar:MatSnackBar,private  noteservice:NoteService  ) { }

  ngOnInit() {
    // console.log('note data',this.noteData);
  }
  deleteNote(){
    console.log("note delete");
    
    this.noteservice.putRequest("deletenotes?id="+this.noteData.id,'').subscribe(
      (response:any)=>{
        if(response.statusCode===10){
          console.log()
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
}
