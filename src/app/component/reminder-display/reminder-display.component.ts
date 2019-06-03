import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reminder-display',
  templateUrl: './reminder-display.component.html',
  styleUrls: ['./reminder-display.component.scss']
})
export class ReminderDisplayComponent implements OnInit {
@Input() noteData:any;
  constructor() { }

  ngOnInit() {
  }

}
