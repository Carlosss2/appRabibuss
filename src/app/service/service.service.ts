import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viajes } from '../models/viajes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getViajes(): Observable<Viajes[]> {
    const urlApi = `${this.url}/listarregistros/`;
    console.log(urlApi);
    return this.http.get<Viajes[]>(urlApi, { headers: this.getHeaders() });
  }

  getViajeById(viaje_id: number): Observable<Viajes> {
    const urlApi = `${this.url}/consultarregistro/${viaje_id}`;
    console.log(urlApi);
    return this.http.get<Viajes>(urlApi, { headers: this.getHeaders() });
  }

  addViaje(registerRequest: { origen: string; destino: string; pasajeros: string; fecha: string }): Observable<any> {
    const urlApi = `${this.url}/registro/`;
    console.log(urlApi);
    return this.http.post(urlApi, registerRequest, { headers: this.getHeaders() });
  }

  updateViaje(viaje_id: string, origen: string, destino: string): Observable<any> {
    const urlApi = `${this.url}/actualizarregistro/${viaje_id}`;
    const body = { origen, destino };
    return this.http.put<Viajes>(urlApi, body, { headers: this.getHeaders() });
  }
  
  

  deleteViaje(viaje_Id: number): Observable<void> {
    const urlApi = `${this.url}/borrarregistro/${viaje_Id}`;
    console.log(urlApi);
    return this.http.delete<void>(urlApi, { headers: this.getHeaders() });
  }
}
