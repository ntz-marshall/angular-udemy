import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['../ng-if/ng-if.component.css']
})
export class NgTemplateComponent implements OnInit {

  enable: boolean = false
  
  constructor() { }

  ngOnInit(): void {
  }

}