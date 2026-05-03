import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private REST_API_BASE_URL = 'http://localhost:8084/api/departments';

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.REST_API_BASE_URL);
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.REST_API_BASE_URL, department);
  }

  getDepartmentById(departmentId: number): Observable<Department> {
    return this.http.get<Department>(`${this.REST_API_BASE_URL}/${departmentId}`);
  }

  updateDepartment(departmentId: number, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.REST_API_BASE_URL}/${departmentId}`, department);
  }

  deleteDepartment(departmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.REST_API_BASE_URL}/${departmentId}`);
  }
}
