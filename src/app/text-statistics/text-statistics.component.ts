import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-statistics',
  templateUrl: './text-statistics.component.html',
  styleUrls: ['./text-statistics.component.css']
})
export class TextStatisticsComponent implements OnInit {
  textAreaContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  calcStatistics() {
  }
}
