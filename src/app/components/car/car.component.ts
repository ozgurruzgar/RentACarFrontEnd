import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CarResponseModel } from 'src/app/models/carResponseModul';
import { Car } from 'src/app/models/cars';  

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  ngOnInit(): void {
    this.getCars();
  }
  cars:Car[]=[];
  apiUrl ="https://localhost:44387/api/cars/getcardetail";
  constructor(private httpClient:HttpClient){}  
  getCars(){
 this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe(response=>{
  this.cars=response.data;
 });
  }
}
