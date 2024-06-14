import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey:string ='3ae2ee84d53a495cbbaad745036b1c1d';
  
  

  private apiUrl:string ='https://api.weatherbit.io/v2.0/current'


  constructor(private  http:HttpClient) { }

  getWeather(city:string):Observable<any>{
    const url = `${this.apiUrl}?city=${city}&key=${this.apiKey}&units==metric`;
    return this.http.get(url)
  }
}
