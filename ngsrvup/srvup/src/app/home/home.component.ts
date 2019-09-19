import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prevented = false;
  constructor() { }

  ngOnInit() {
  }
  preventNormal(event: any, image: any) {
    // console.log(image)
    if (!this.prevented) {
      event.preventDefault();
      console.log(image.getAttribute('href'));
      image.setAttribute('href', '/videos');
      this.prevented = true;

      // alert('working...');
    }

  }
}
