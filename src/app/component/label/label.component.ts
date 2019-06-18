import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LabelService } from 'src/app/services/label-service';
import { MatDialog } from '@angular/material';
import { DialogLabelComponent } from './../dialog-label/dialog-label.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
label: any[];
data: any[];
message: any;
labelnotes: any;
  constructor(private labelsService: LabelService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private dataService: DataService,
              private router: Router) { }

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
    console.log(this.label,'labels'),
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

  getAllLabelsNotes(labels){
    console.log('getallnotelabels');
    if (labels.labelId==null) {
      console.log('labelsId null');
    } else {
      this.labelsService.getRequest('getlabelsOfNotes?labelid=' + labels.labelId ).subscribe(
        (response: any ) => {
          this.labelnotes = response,
          console.log(this.labelnotes ,' labelsNotes ');
          this.dataService.changeMessage(response);
        this.router.navigate(['/dashboard/label-notes']);
        }

      );

    }
  }

}
