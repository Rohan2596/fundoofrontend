import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { LabelService } from 'src/app/services/label-service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
label:any[]
  constructor(private labelsService:LabelService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    console.log("labels created")
    this.labelsService.getRequest("getlabels").subscribe(
    (response:any)=>{
      this.label=response,
      console.log(response)
      this.snackBar.open(
        "Labels ",
        "undo",
        {duration:2500}
      )}

    )
  }

}
