import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DojoService {

  weather = {
    humidity: '',
    temp_avg: 0,
    temp_high: 0,
    temp_low: 0,
    status: ''
  };

  constructor(private _http: Http) { }

  retrieveWeather(city, callback) {
    let address = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&&appid=bcd49dc0a841151f291b4e69279dfb71';
    this._http.get(address).subscribe(
      (response) => {
        let theWeather = response.json();
        this.weather.humidity = theWeather.main.humidity;
        this.weather.temp_avg = Math.round((9/5)*(theWeather.main.temp - 273) + 32);
        this.weather.temp_high = Math.round((9/5)*(theWeather.main.temp_max - 273) + 32);
        this.weather.temp_low = Math.round((9/5)*(theWeather.main.temp_min - 273) + 32);
        this.weather.status = theWeather.weather[0].description;
        callback(this.weather);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
