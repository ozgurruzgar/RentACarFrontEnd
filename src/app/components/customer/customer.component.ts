import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customers';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ngOnInit(): void {
    this.getCustomers();
  }
  customers:Customer[]=[];
  apiUrl="https://localhost:44387/api/customers/getall";
  constructor(private httpClient:HttpClient){}
  getCustomers(){
    this.httpClient.get<CustomerResponseModel>(this.apiUrl).subscribe(response=>{
      this.customers=response.data
    });
  }
}
