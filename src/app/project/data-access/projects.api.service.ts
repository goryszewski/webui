import { Injectable, inject } from '@angular/core';
import { Project } from '../model/Project';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
type GetAllProjectsSearchParams = {};

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {

  private URL = environment.link;
  private http = inject(HttpClient);

  getAll(searchParams?: GetAllProjectsSearchParams) {
    return this.http.get<Project[]>(`${this.URL}/projects`, {
      params: searchParams,
    });
  }
  add(name: string) {
    return this.http.post<Project>(`${this.URL}/projects`, { name });
  }
}
