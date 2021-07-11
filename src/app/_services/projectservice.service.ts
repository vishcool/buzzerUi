import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestModel } from '../_models/RequestModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  AllrequestProject:RequestModel[]=[];
  constructor(private httpClient:HttpClient) { }

  async getAllRequestProject(){


      this.AllrequestProject = await this.httpClient.get<RequestModel[]>("assets/data.json").toPromise();
      return this.AllrequestProject;
    }

    getProjectWithId(id:number):RequestModel | undefined{
      return this.AllrequestProject.find((data => data.id == id));


    }
  }
