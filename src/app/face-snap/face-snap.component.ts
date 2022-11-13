import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
  title!:string;
  description!:string;
  createDate!:Date;
  snap!:number;
  imageUrl! :string;

  buttonText!:string;

  //Interface d'initialisation
  ngOnInit(){
    this.title = "Archibald";
    this.description = "Mon meilleur ami";
    this.createDate = new Date();
    this.snap = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';

    this.buttonText = 'On Snap!';
  }

  //Ajouter les snap
  onSnap(){


    if (this.buttonText === 'On Snap!') {
      this.snap ++;
      this.buttonText = 'Oops, unSnap ! ';
    } else {

      this.snap --;
      this.buttonText = 'On Snap!';
    }
  }
}
