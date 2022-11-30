import { Component , OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  
  ngOnInit(){
    this.mySnap = new FaceSnap(
     "Archibald",
     "Mon meilleur ami",
      new Date(),
      0,
     'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  
    );

    this.myOtherSnap = new FaceSnap(
      "Archibald 2",
      "Ma meilleure amie",
       new Date(),
       0,
       'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
   
    );

    this.myLastSnap = new FaceSnap(
      "Archibald 3",
      "Ma meilleure amie 3",
       new Date(),
       0,
       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
   
    );
  }
}
