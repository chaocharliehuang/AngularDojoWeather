import { Component, OnInit } from '@angular/core';
import { DojoService } from './../dojo.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather = {};
  
  constructor(private _dojoService: DojoService) {
    this.getWeather('seattle,wa');
  }

  getWeather(city) {
    this._dojoService.retrieveWeather(city, (weather) => {
      this.weather = weather;
    });
  }

  ngOnInit() {
  }

}
