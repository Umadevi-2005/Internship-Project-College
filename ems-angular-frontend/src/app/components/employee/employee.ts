import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee';
import { DepartmentService } from '../../services/department';
import { Employee as EmployeeModel } from '../../models/employee.model';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  id: number | null = null;
  firstName = '';
  lastName = '';
  email = '';
  departmentId: number | string = '';
  departments: Department[] = [];

  errors = {
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => { this.departments = data; },
      error: (error) => { console.error(error); }
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      this.employeeService.getEmployee(this.id).subscribe({
        next: (data) => {
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.email = data.email;
          this.departmentId = data.departmentId;
        },
        error: (error) => { console.error(error); }
      });
    }
  }

  pageTitle(): string {
    return this.id ? 'Update Employee' : 'Add Employee';
  }

  validateForm(): boolean {
    let valid = true;
    this.errors = { firstName: '', lastName: '', email: '', department: '' };

    if (!this.firstName.trim()) { this.errors.firstName = 'First name is required'; valid = false; }
    if (!this.lastName.trim()) { this.errors.lastName = 'Last name is required'; valid = false; }
    if (!this.email.trim()) { this.errors.email = 'Email is required'; valid = false; }
    if (!this.departmentId) { this.errors.department = 'Select Department'; valid = false; }

    return valid;
  }

  saveOrUpdateEmployee(): void {
    if (!this.validateForm()) return;

    const employee: EmployeeModel = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      departmentId: Number(this.departmentId)
    };

    if (this.id) {
      this.employeeService.updateEmployee(this.id, employee).subscribe({
        next: () => { this.router.navigate(['/employees']); },
        error: (error) => { console.error(error); }
      });
    } else {
      this.employeeService.createEmployee(employee).subscribe({
        next: () => { this.router.navigate(['/employees']); },
        error: (error) => { console.error(error); }
      });
    }
  }
}
