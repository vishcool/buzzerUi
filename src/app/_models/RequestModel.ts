import { LabDetails } from "./labdetails";

export class RequestModel {
  id:number;
  isActive:boolean;
  name:string;
  company:string;
  startDate:string;
  dueDate:string;
  progress:number;
  labdetails:LabDetails[];
}
