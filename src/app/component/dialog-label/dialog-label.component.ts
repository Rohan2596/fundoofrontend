import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from "@angular/material";
import { LabelService } from "src/app/services/label-service";
import { Labels } from "src/app/models/label";
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.scss']
})
export class DialogLabelComponent implements OnInit {
//  labelId:number
//  labelName:string
labels:Labels=new Labels();
  constructor(
    private snackBar:MatSnackBar,
    private labelsService:LabelService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
label:any;   
     labelName=new FormControl('');

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
      )}

  createlabel(){
    console.log("labels created")
    console.log(this.label.labelName)
    this.labelsService.postRequest("labels/create",this.labels).subscribe(
      (response:any)=>{
        if(response.statusCode===11){
          console.log(this.labels)
        }else{
          console.log("labels failed ")
        }
      }
    )
  }
  clear(){
    console.log("labels cleared")
    this.labels.labelName=null
  }
  delete(items){
   
    console.log("labels delete permanetly");
    console.log("Delete"+items.labelId);
    this.labelsService.deleteRequest("labels/delete?id="+items.labelId).subscribe(
      (response:any)=>{
              if(response.statusCode===11){
                console.log()
                this.snackBar.open(
                  "labels delete",
                  "undo",
                  {duration:2500}
                )
      
              }else{
                this.snackBar.open(
                  "labels delete failed",
                  "undo",
                )
              }
              
            }
          )

  }
   update(items){
     console.log("update")
     console.log(this.labelName.value)
     console.log(items.labelId)
     
     
     this.label={
      'labelName':this.labelName.value
     }
     this.labelsService.putRequest("labels/update?id="+items.labelId,this.label).subscribe(
       (response:any)=>{
        if(response.statusCode===11){
           console.log(this.label)
        }else{
           console.log("Labels updation failed")
        }
     }
    )
  }
}
