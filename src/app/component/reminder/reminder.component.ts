import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
remindernotes:any
  constructor(private noteservice: NoteService) { }

  ngOnInit() {
    this.getNote();
  }
  getNote() {
    this.noteservice.getRequest("getReminder").subscribe(
      (response: any) => {
     this.remindernotes= response;
     console.log(response);
      });
  }
}
