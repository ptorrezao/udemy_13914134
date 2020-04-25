import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isInvisible = true;
  log = []
  toogleVisibility() {
    this.log.push(this.isInvisible?"Hide":"Show");
    this.isInvisible = !this.isInvisible;
  }
}
