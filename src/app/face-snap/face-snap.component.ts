import { Component,Input,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model.component';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  //injection du model
  @Input() faceSnap! : FaceSnap

  buttonText!:string;

  constructor(
    private fs: FaceSnapService,
    private router : Router
  ){}

  //Interface d'initialisation
  ngOnInit(){
    this.buttonText = 'On Snap!';
  }

  

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
