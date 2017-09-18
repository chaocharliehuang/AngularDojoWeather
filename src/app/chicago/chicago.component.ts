import { Component, OnInit } from '@angular/core';
import { DojoService } from './../dojo.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather = {};
  
  constructor(private _dojoService: DojoService) {
    this.getWeather('chicago,il');
  }

  getWeather(city) {
    this._dojoService.retrieveWeather(city, (weather) => {
      this.weather = weather;
    });
  }

  ngOnInit() {
  }

}
