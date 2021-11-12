import { Component, OnInit } from '@angular/core';
import { UserAggregatorService } from '../services/userAggregator.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'admin-panel-component',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers:[
    {provide:UserAggregatorService,
      useClass:UserAggregatorService}]
})
export class AdminPanelComponent implements OnInit {


  constructor(public cuurentRoute:ActivatedRoute) { }

  currentUserName:string="";
  ngOnInit(): void {
    this.cuurentRoute.params.subscribe((params)=>{
       this.currentUserName=params['username'];

    });
  }

}
