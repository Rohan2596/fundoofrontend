import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NoteService } from "src/app/services/note-service";
import { LabelService } from "src/app/services/label-service";
@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class AppIconComponent implements OnInit {
  @Input() noteData: any;
  alllabel: any[];
  labelofnote: any[];
  constructor(private snackBar: MatSnackBar, private noteservice: NoteService, private labelsService: LabelService) { }

  ngOnInit() {
    // console.log('note data',this.noteData);
    this.labelsService.getRequest("getlabels").subscribe(
      (response: any) => {
        this.alllabel = response;
        console.log(this.alllabel)
      }
    )
    // labelof note
    this.labelsService.getRequest("getallNotelabel?noteid=" + this.noteData.id).subscribe(
      (response: any) => {

        this.labelofnote = response;
        console.log(this.labelofnote);
      }
    )

  }

  trashNote() {
    console.log("note trash");

    this.noteservice.putRequest("notes/trash?id=" + this.noteData.id, '').subscribe(
      (response: any) => {
        if (response.statusCode === 10) {
          console.log()
          this.snackBar.open(
            "Note moved to trash",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes trash  failed",
            "undo",
          )
        }

      }
    )

  }

  archive() {
    console.log("Note Archive");
    this.noteservice.putRequest("notes/archieve?id=" + this.noteData.id, '').subscribe(
      (response: any) => {
        if (response.statusCode === 10) {
          console.log()
          this.snackBar.open(
            "Note moved to Archive",
            "undo",
            { duration: 2500 }
          )

        } else {
          this.snackBar.open(
            "Notes Archive  failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )
  }
  addLabelToNote(labels) {
    console.log(labels.labelId, this.noteData.id)
    this.labelsService.putRequest("labels/addnote?labelid=" + labels.labelId + "&noteid=" + this.noteData.id, "").subscribe(

      (response: any) => {
        if (response.statusCode == 11) {
          this.snackBar.open("label added", "undo", { duration: 2500 })
        } else {
          this.snackBar.open("labels addition FAILED", "undo", { duration: 2500 })
        }
      }

    )
  }

}
