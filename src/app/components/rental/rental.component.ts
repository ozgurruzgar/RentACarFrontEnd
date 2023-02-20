import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';
import { Rental } from 'src/app/models/rental';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  ngOnInit(): void {
    this.getRentals();
  }
  rentals:Rental[]=[];
  apiUrl="https://localhost:44387/api/rentals/getrentaldetail";
  constructor(private httpClient:HttpClient){}
  getRentals(){
    this.httpClient.get<RentalResponseModel>(this.apiUrl).subscribe(Response=>{
      this.rentals=Response.data;
    });
  }
}
