import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-label-display',
  templateUrl: './label-display.component.html',
  styleUrls: ['./label-display.component.scss']
})
export class LabelDisplayComponent implements OnInit {
  @Input() noteData: any;
  labelofnote: any[];
  constructor(private noteservice:NoteService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.noteservice.getRequest("getallNotelabel?noteid=" + this.noteData.id).subscribe(
      (response: any) => {

        this.labelofnote = response;
        console.log(this.labelofnote);
      }
    )
  }
  remove(items){
    console.log(this.noteData.id);
    console.log(items);
    this.noteservice.putRequest("notes/removeNotetolabel?labelid="+  items.labelId  +"&noteid="+this.noteData.id,"").subscribe(
      (response:any)=>{
        if(response.statusCode==10){
          this.snackBar.open("labels removed","undo",{duration:2500})
        }else{
          this.snackBar.open("labels removed FAILED","undo",{duration:2500})
        }

      }
    )
  }

}
