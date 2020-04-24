import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated=false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created, Name is ' + this.serverName;
    this.serverCreated =true;
  }

  onUpdateServerName(event: any)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
