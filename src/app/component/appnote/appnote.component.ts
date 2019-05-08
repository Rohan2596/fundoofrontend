import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appnote',
  templateUrl: './appnote.component.html',
  styleUrls: ['./appnote.component.scss']
})
export class AppnoteComponent implements OnInit {
private  popup:boolean;
  constructor() { }

  ngOnInit() {
  }
  onPopup(){
    this.popup=true
  }
}
