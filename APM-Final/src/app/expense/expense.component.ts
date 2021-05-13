import { Component, OnDestroy, OnInit } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from './expense.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  errorMessage = '';
  rowData: Expense[] | undefined;

  constructor(private expenseService: ExpenseService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.expenseService.getExpense().subscribe({
      next: data => {
        this.rowData = data;
      },
      error: err => this.errorMessage = err
    });
  }

  defaultColDef = {
    sortable: true,
    filter: true
  };

  columnDefs = [
    { field: 'month', headerName: 'Month' },
    { field: 'year', headerName: 'Year' },
    { field: 'type', headerName: 'Type' },
    { field: 'expense', headerName: 'Expense' }
  ];
}
