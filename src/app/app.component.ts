import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgServerUdemy';
  serverElements = [];
  newServerName = '';
  newServerContent = '';
  servers:any= '';

  onAddServer() {
    this.servers.push("Another Servers!");
    /*
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

  onAddBlueprint(id:number) {
    const position=id+1;
    this.servers.splice(position,1);
  }
}
