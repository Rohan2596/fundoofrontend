import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { LabelService } from 'src/app/services/label-service';
import { Labels } from 'src/app/models/label';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.scss']
})
export class DialogLabelComponent implements OnInit {
//  labelId:number
//  labelName:string
labels: Labels = new Labels();
message: any;
  constructor(
    private snackBar: MatSnackBar,
    private labelsService: LabelService,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
label: any;
     labelName = new FormControl('');

  ngOnInit() {
   this.getlabels();
   this.dataService.currentMessage.subscribe(
    (response: any) => {
       this.message = response;
       this.getlabels();

    }

     );
    }

getlabels() {
  console.log('labels created');
  this.labelsService.getRequest('getlabels').subscribe(
  (response: any) => {
    this.label = response,
    console.log(response);
    this.snackBar.open(
      'Labels ',
      'undo',
      {duration: 2500}
    );}
    );
}


  createlabel() {
    console.log('labels created');
    console.log(this.labels.labelName);
    this.labelsService.postRequest('labels/create', this.labels).subscribe(
      (response: any) => {
        if (response.statusCode === 11) {
          console.log(this.labels),
          this.dataService.changeMessage('create label');
        } else {
          console.log('labels failed ');
        }
      }
    );
  }
  clear() {
    console.log('labels cleared');
    this.labels.labelName = null;
  }
  delete(items) {

    console.log('labels delete permanetly');
    console.log('Delete'+ items.labelId);
    this.labelsService.deleteRequest('labels/delete?id='+ items.labelId).subscribe(
      (response: any) => {
              if (response.statusCode === 11) {
                console.log();
                this.dataService.changeMessage('create label');
                this.snackBar.open(
                  'labels delete',
                  'undo',
                  {duration: 2500}
                );

              } else {
                this.snackBar.open(
                  'labels delete failed',
                  'undo',
                );
              }

            }
          );

  }
   update(items) {
     console.log('update');
     console.log(this.labelName.value);
     console.log(items.labelId);


     this.label = {
      labelName: this.labelName.value
     };
     this.labelsService.putRequest('labels/update?id='+ items.labelId, this.label).subscribe(
       (response: any) => {
        if (response.statusCode === 11) {
           console.log(this.label);
           this.dataService.changeMessage('create label');
        } else {
           console.log('Labels updation failed');
        }
     }
    );
  }
}
