import { Component, OnInit } from '@angular/core';
import { DojoService } from './../dojo.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  weather = {};
  
  constructor(private _dojoService: DojoService) {
    this.getWeather('washington,dc');
  }

  getWeather(city) {
    this._dojoService.retrieveWeather(city, (weather) => {
      this.weather = weather;
    });
  }

  ngOnInit() {
  }

}
