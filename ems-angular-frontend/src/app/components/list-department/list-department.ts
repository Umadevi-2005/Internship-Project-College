import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department';

@Component({
  selector: 'app-list-department',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-department.html',
  styleUrl: './list-department.css',
})
export class ListDepartment implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.listOfDepartments();
  }

  listOfDepartments(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (data: Department[]) => { this.departments = data; },
      error: (err: unknown) => { console.error(err); }
    });
  }

  updateDepartment(id: number): void {
    this.router.navigate(['/edit-department', id]);
  }

  removeDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe({
      next: () => { this.listOfDepartments(); },
      error: (err: unknown) => { console.error(err); }
    });
  }
}
