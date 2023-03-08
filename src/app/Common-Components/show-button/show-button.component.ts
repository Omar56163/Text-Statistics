import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-button',
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.css'],
})
export class ShowButtonComponent implements OnInit {
  @Input() btnText: string;
  constructor() {}

  ngOnInit(): void {}
}
