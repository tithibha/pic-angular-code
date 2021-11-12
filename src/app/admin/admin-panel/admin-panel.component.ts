import { Component, OnInit } from '@angular/core';
import { UserAggregatorService } from '../services/userAggregator.service';

@Component({
  selector: 'admin-panel-component',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers:[
    {provide:UserAggregatorService,
      useClass:UserAggregatorService}]
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
