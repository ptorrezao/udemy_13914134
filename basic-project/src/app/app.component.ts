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
    this.isInvisible = !this.isInvisible;
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
}
