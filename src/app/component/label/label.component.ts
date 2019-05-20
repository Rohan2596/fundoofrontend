import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { LabelService } from 'src/app/services/label-service';
import { MatDialog } from "@angular/material";
import { DialogLabelComponent } from "./../dialog-label/dialog-label.component";
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
label:any[]
data:any[]
  constructor(private labelsService:LabelService,
    private snackBar:MatSnackBar,
    private dialog:MatDialog) { }

  ngOnInit() {
    console.log("labels created")
    this.labelsService.getRequest("getlabels").subscribe(
    (response:any)=>{
      this.label=response,
      console.log(this.label,"gdfgdsgsd")
     }

    )
  }
  opendialogLabel():void{
    
    const dialogRef=this.dialog.open(DialogLabelComponent);
      dialogRef.afterClosed().subscribe(result=>{
        console.log('dialog labels')
      });
  }

}
