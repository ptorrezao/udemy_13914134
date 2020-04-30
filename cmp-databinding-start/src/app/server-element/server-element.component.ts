import { Component, OnInit, Input, OnChanges,  SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvElement') element: {
    name: string,
    type: string,
    content: string
  };

  @Input() name: string;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
}
