import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-label-notes',
  templateUrl: './label-notes.component.html',
  styleUrls: ['./label-notes.component.scss']
})
export class LabelNotesComponent implements OnInit {
note:any[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
this.getalllabelNotes();
  }
getalllabelNotes(){
  this.dataService.currentMessage.subscribe(
    (response:any)=>{
      this.note=response;
    }
    )}
}
