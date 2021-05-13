import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  constructor() { }
  months: string[] = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  toggled(event: any) {
    if (event) {
      console.log('is open');
    } else {
      console.log('is closed');
    }
  }

  ngOnInit(): void {
  }

}
