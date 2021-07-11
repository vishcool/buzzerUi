import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { LabDetails } from 'src/app/_models/labdetails';
import { RequestModel } from 'src/app/_models/RequestModel';
import { ProjectserviceService } from 'src/app/_services/projectservice.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() activeProject!: number;

  date =new Date();
  RequestModel : RequestModel;
  rows:LabDetails[];
  columns = [{ name: 'Lab' }, { name: 'Department' }, { name: 'Test' },{ name: 'Materrial' },];

  constructor(private projectService :ProjectserviceService) { }

  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];

    // console.log(this.activeProject)
    this.RequestModel = this.projectService.getProjectWithId(this.activeProject) || new RequestModel();
    this.rows = this.RequestModel.labdetails;

  }
}


