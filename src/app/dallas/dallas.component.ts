import { Component, OnInit } from '@angular/core';
import { DojoService } from './../dojo.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather = {};
  
  constructor(private _dojoService: DojoService) {
    this.getWeather('dallas,tx');
  }

  getWeather(city) {
    this._dojoService.retrieveWeather(city, (weather) => {
      this.weather = weather;
    });
  }

  ngOnInit() {
  }

}
