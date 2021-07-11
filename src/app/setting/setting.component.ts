import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../_models/RequestModel';
import { ProjectserviceService } from '../_services/projectservice.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  date =new Date();
  listOfProject !: RequestModel[];
  activeProject:number=0;

  activeTab:number = 1;

  constructor(private projectService :ProjectserviceService) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  loadTabIndex(tabIndex : number){
    this.activeTab = tabIndex;
  }

  detailProject(id:number){
    this.activeProject = id;
  }

  async getAllProject(){
  this.listOfProject =   await this.projectService.getAllRequestProject();
  }


}
