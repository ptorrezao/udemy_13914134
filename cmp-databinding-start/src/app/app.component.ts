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
}
