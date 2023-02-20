import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Color } from 'src/app/models/colors';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  ngOnInit(): void {
    this.getColors();
  }
  colors:Color[]=[];
  apiUrl="https://localhost:44387/api/colors/getall";
  constructor(private httpClient:HttpClient){}
  getColors(){
    this.httpClient.get<ColorResponseModel>(this.apiUrl).subscribe(response=>{
      this.colors=response.data;
    })
  }
}
