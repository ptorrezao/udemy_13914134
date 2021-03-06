import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      name: 'server',
      type: 'server',
      content: 'just a Test'
    },
    {
      name: 'server',
      type: 'blueprint',
      content: 'blueprint'
    }
  ];
  onChangeFirst()
  {
    this.serverElements[0].name = Date.now().toString();
  }

  onServerAdded(serverData: { serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  
}
