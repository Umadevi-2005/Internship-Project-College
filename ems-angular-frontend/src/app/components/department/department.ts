import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department';
import { Department as DepartmentModel } from '../../models/department.model';

@Component({
  selector: 'app-department',
  imports: [FormsModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit {
  id: number | null = null;
  departmentName = '';
  departmentDescription = '';

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = Number(paramId);
      this.departmentService.getDepartmentById(this.id).subscribe({
        next: (data) => {
          this.departmentName = data.departmentName;
          this.departmentDescription = data.departmentDescription;
        },
        error: (error) => { console.error(error); }
      });
    }
  }

  pageTitle(): string {
    return this.id ? 'Update Department' : 'Add Department';
  }

  saveOrUpdateDepartment(): void {
    const department: DepartmentModel = {
      departmentName: this.departmentName,
      departmentDescription: this.departmentDescription
    };

    if (this.id) {
      this.departmentService.updateDepartment(this.id, department).subscribe({
        next: () => { this.router.navigate(['/departments']); },
        error: (error) => { console.error(error); }
      });
    } else {
      this.departmentService.createDepartment(department).subscribe({
        next: () => { this.router.navigate(['/departments']); },
        error: (error) => { console.error(error); }
      });
    }
  }
}
