import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  note :any;

  constructor(private noteservice:NoteService) { }

  ngOnInit() {
  }

  onKey(event:any) {
    this.noteservice.getRequest("elasticSearch/getallNotes").subscribe(
      (response: any) => {
     this.note = response;
     console.log(response);
      });
  }
}
