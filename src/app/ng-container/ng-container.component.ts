import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['../app.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "Marshall", role: "admin", lastlogin: new Date('2/1/2021')},
    { login: "Denis", role: "admin", lastlogin: new Date('3/1/2021')},
    { login: "Nicolas", role: "user", lastlogin: new Date('6/1/2021')},
    { login: "Marcus", role: "user", lastlogin: new Date('4/1/2021')},
    { login: "Sophia", role: "user", lastlogin: new Date('2/1/2021')},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
