import { Component, OnInit } from '@angular/core';
import { DojoService } from './../dojo.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  weather = {};
  
  constructor(private _dojoService: DojoService) {
    this.getWeather('san jose,ca');
  }

  getWeather(city) {
    this._dojoService.retrieveWeather(city, (weather) => {
      this.weather = weather;
    });
  }

  ngOnInit() {
  }

}
