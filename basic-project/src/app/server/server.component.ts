import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  serverId = 10;
  state = "Online";
  getServerStatus(){
    return this.state;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
