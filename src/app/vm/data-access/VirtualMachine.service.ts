import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { VirtualMachine } from '../model/VirtualMachine';



@Injectable({
  providedIn: 'root',
})
export class VirtualMachineService {
  private http = inject(HttpClient);
  private URL = "http://127.0.0.1:8050";

  getAll() {
    return this.http.get<VirtualMachine[]>(`${this.URL}/api/vms`, {
      observe: 'response',
    });
  }

}
