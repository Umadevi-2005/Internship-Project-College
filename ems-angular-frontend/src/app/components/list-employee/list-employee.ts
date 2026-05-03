import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-list-employee',
  imports: [CommonModule],
  templateUrl: './list-employee.html',
  styleUrl: './list-employee.css',
})
export class ListEmployee implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.listEmployees().subscribe({
      next: (data: Employee[]) => { this.employees = data; },
      error: (err: unknown) => { console.error(err); }
    });
  }

  addNewEmployee(): void {
    this.router.navigate(['/add-employee']);
  }

  updateEmployee(id: number): void {
    this.router.navigate(['/edit-employee', id]);
  }

  removeEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => { this.getAllEmployees(); },
      error: (err: unknown) => { console.error(err); }
    });
  }
}
