import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  onCityChange(value: string): void {
    this.city = value;
  }

  constructor(private service:WeatherService){}

  async getWeather() {
    if (this.city.trim()) {
      try {
        const data = await this.service.getWeather(this.city).toPromise();
        this.weatherData = data.data[0]; // Assuming the API response contains a data array
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    }
  }
}
