import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss']
})
export class MainDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navMap()
  {
    window.location.href = 'https://goo.gl/maps/BY1m9gQMj2q';
  }

}
