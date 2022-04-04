import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  serverElements: any[] = [];
  constructor() {}

  newServerName: any = '';
  newServerContent: any = '';
  servers: any = '';
  //@ViewChild('serverContentInput') serverNameInput!: ElementRef;
  @ViewChild('serverNameInput') serverNameInput!: ElementRef;
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    //this.servers.push("Another Servers!");

    console.log(nameInput.value);
    this.serverElements.push({
      type: 'server',
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onClear() {
    this.newServerName = '';
    this.newServerContent = '';
    this.servers = '';
  }
  ngOnInit(): void {
    this.onAddBlueprint();
    this.onClear();
  }
}
