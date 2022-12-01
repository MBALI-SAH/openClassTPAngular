import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model.component';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps! : FaceSnap[];

  constructor(
    private fs: FaceSnapService
  ) { }

  ngOnInit(): void {

    this.faceSnaps = this.fs.getAllFaceSnaps();
   
  }

}
