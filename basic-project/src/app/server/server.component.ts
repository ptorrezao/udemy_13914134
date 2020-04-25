import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online { color: white; background-color:green;}
    .offline { color: white;background-color:red;}
  `]
})
export class ServerComponent implements OnInit {
  serverId = 10;
  state = "offline";
  getServerStatus() {
    return this.state;
  }
  constructor() {
    this.state = Math.random() > 0.5 ? "online" : 'offline';
  }

  getColor(){
    return this.state==='online'? 'green':'red';
  }

  ngOnInit(): void {
  }

}
