import { Component, OnInit } from '@angular/core';
import { Notes } from "../../models/note";
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-appnote',
  templateUrl: './appnote.component.html',

  styleUrls: ['./appnote.component.scss']
})
export class AppnoteComponent implements OnInit {
  private popup: boolean;
  note: Notes = new Notes();
 
  constructor(private snackBar: MatSnackBar, private noteservice: NoteService,public fromBuilder:FormBuilder) { }

  ngOnInit() {

    }
  onPopup() {
    this.popup = true
}

  onClose() {
    console.log("note created");
 
    this.noteservice.postRequest("createNotes", this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 10) {
          console.log(response);
          this.snackBar.open(
            "Notes Created",
            "undo",
            { duration: 2500 }
            
          )
      
        } else {
          console.log(response);
          this.snackBar.open(
            "Notes not created",
            "undo",
            { duration: 2500 }
          )
        }
      }
    )
    this.note.title=null;
    this.note.description=null;
    this.popup = false;
    

    }
  }
