import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Brand } from 'src/app/models/brands';
import { BrandResponseModul } from 'src/app/models/brandResponseModul';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  ngOnInit(): void {
    this.getBrands();
  }
  brands:Brand[]=[];
  apiUrl="https://localhost:44387/api/brands/getall";
  constructor(private httpClient:HttpClient){};
  getBrands(){
  this.httpClient.get<BrandResponseModul>(this.apiUrl).subscribe(response =>{
    this.brands=response.data;
 })
}
}
