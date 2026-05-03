import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ListEmployee } from './components/list-employee/list-employee';
import { Employee } from './components/employee/employee';
import { ListDepartment } from './components/list-department/list-department';
import { Department } from './components/department/department';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'employees', component: ListEmployee },
  { path: 'add-employee', component: Employee },
  { path: 'edit-employee/:id', component: Employee },
  { path: 'departments', component: ListDepartment },
  { path: 'add-department', component: Department },
  { path: 'edit-department/:id', component: Department }
];
