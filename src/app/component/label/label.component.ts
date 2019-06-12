import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LabelService } from 'src/app/services/label-service';
import { MatDialog } from '@angular/material';
import { DialogLabelComponent } from './../dialog-label/dialog-label.component';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
label: any[];
data: any[];
message: any;
  constructor(private labelsService: LabelService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private dataService: DataService) { }

  ngOnInit() {
   this.getlabels();
   this.dataService.currentMessage.subscribe(
     (response: any) => {
       this.message = response,
       this.getlabels ;
     }
   );

  }
 getlabels() {
  console.log('labels created');
  this.labelsService.getRequest('getlabels').subscribe(
  (response: any) => {
    this.label = response,
    console.log(this.label,'labels  '),
    this.dataService.changeMessage('label');
   }

  );
 }


  opendialogLabel(): void {

    const dialogRef = this.dialog.open(DialogLabelComponent);
    dialogRef.afterClosed().subscribe(result => {
        console.log('dialog labels');
      });
  }

}
