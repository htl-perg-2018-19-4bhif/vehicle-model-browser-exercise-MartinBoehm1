import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TestBed } from '@angular/core/testing';
interface ICar {
    id: number;
    year: number;
    make: string;
    model: string;
    hasDetails: number;
  } 
@Component({
  selector: 'app-pokemons-details',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {


  public chosenMake:string="";
  public chosenYear:number=-1;
  public years:number[] = [1,2,3];
  public makes:string[] = [];
  public models:ICar[]=[];
  public test=[];
  public page=0;
  public nextExists=true;
  public makeToSearch:string;
  public yearToSearch:number;
  constructor(private http: HttpClient) {
    this.getFilterable();
  }
  ngOnInit() {
  }
  async getFilterable(){
    this.makes=await this.http.get<string[]>('https://vehicle-data.azurewebsites.net/api/makes').toPromise();
    this.years=await this.http.get<number[]>('https://vehicle-data.azurewebsites.net/api/years').toPromise();
  }
  async getModels(){
    this.page=0;
    this.makeToSearch=this.chosenMake;
    this.yearToSearch=this.chosenYear;
    this.callServer();
  }
  async callServer(){
    if(this.chosenYear>0){
      this.models=await this.http.get<ICar[]>(`https://vehicle-data.azurewebsites.net/api/models?make=${this.makeToSearch}&year=${this.yearToSearch}&offset=${this.page*10}`).toPromise();
      this.test=await this.http.get<ICar[]>(`https://vehicle-data.azurewebsites.net/api/models?make=${this.makeToSearch}&year=${this.yearToSearch}&offset=${(this.page+1)*10}`).toPromise();
      
    }else{
      this.models=await this.http.get<ICar[]>(`https://vehicle-data.azurewebsites.net/api/models?make=${this.makeToSearch}&offset=${this.page*10}`).toPromise();
      this.test=await this.http.get<ICar[]>(`https://vehicle-data.azurewebsites.net/api/models?make=${this.makeToSearch}&offset=${(this.page+1)*10}`).toPromise();
      
    }
  }
  async next(){
    this.page++;
    this.callServer();
  }
  async previous(){
    this.page--;
    this.callServer();
  }
}
