import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  constructor() {}
  title = 'NgServerUdemy';
  serverElements: any[] = [];
  newServerName: any = '';
  newServerContent: any = '';
  servers: any = '';

  onAddServer() {
    //this.servers.push("Another Servers!");

    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  ngOnInit(): void {}
}
