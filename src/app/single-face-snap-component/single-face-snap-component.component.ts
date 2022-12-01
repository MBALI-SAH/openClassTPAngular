import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model.component';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss']
})
export class SingleFaceSnapComponentComponent implements OnInit {

  
  //injection du model
  @Input() faceSnap! : FaceSnap

  buttonText!:string;

  constructor(
    private fs: FaceSnapService,
    private route: ActivatedRoute
  ){}

  //Interface d'initialisation
  ngOnInit(){
    this.buttonText = 'On Snap!';

    const snapId = +this.route.snapshot.params['id'];

    this.faceSnap = this.fs.getFaceSnapById(snapId);
  }

  //Ajouter les snap
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
        this.fs.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttonText = 'Oops, unSnap!';
    } else {
        this.fs.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.buttonText = 'Oh Snap!';
    }
  }
}
