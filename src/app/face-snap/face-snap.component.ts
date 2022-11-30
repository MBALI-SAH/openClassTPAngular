import { Component,Input,OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model.component';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  //injection du model
  @Input() faceSnap! : FaceSnap

  buttonText!:string;

  //Interface d'initialisation
  ngOnInit(){
    this.buttonText = 'On Snap!';
  }

  //Ajouter les snap
  onSnap(){


    if (this.buttonText === 'On Snap!') {
      this.faceSnap.snap ++;
      this.buttonText = 'Oops, unSnap ! ';
    } else {

      this.faceSnap.snap --;
      this.buttonText = 'On Snap!';
    }
  }
}
