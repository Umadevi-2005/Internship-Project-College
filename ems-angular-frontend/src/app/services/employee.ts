import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private REST_API_BASE_URL = 'http://localhost:8084/api/employees';

  constructor(private http: HttpClient) {}

  listEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.REST_API_BASE_URL);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.REST_API_BASE_URL, employee);
  }

  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.REST_API_BASE_URL}/${employeeId}`);
  }

  updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.REST_API_BASE_URL}/${employeeId}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.REST_API_BASE_URL}/${employeeId}`);
  }
}
