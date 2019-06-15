import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note-service';
import { DataService } from 'src/app/services/data.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService:DataService ,private dashboard:DashboardComponent ){ }
note:any;

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response:any)=>{
        this.note=response;
     
      }

    )

    
  }

 
}
