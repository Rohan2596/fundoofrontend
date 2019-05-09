import { Component, OnInit } from '@angular/core';
import { Notes } from "../../models/note";
import { NoteService } from "src/app/services/note-service";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-appnote',
  templateUrl: './appnote.component.html',
  styleUrls: ['./appnote.component.scss']
})
export class AppnoteComponent implements OnInit {
  private popup: boolean;
  note: Notes = new Notes();
  title: string;
  description: string
  constructor(private snackBar: MatSnackBar, private noteservice: NoteService) { }

  ngOnInit() {
    this.title = this.note.title;
    this.description = this.note.description;
  }
  onPopup() {
    this.popup = true
}

  onClose() {
    console.log("note created");
    if(this.title==null && this.description==null)
    {
      this.popup = false
    }else{
    this.noteservice.postRequest("createNotes", this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 10) {
          console.log(response);
          this.snackBar.open(
            "Registered Successfully",
            "undo",
            { duration: 2500 }
          )
       
        } else {
          console.log(response);
          this.snackBar.open(
            "Registration Failed",
            "undo",
            { duration: 2500 }
          )
        }
      }
    )
    this.popup = false;

    }
  }}
