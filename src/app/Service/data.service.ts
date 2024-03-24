import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResidentModule } from '../model/resident/resident.module';
import { GeneraleModule } from '../model/generale/generale.module';
import { PromoModule } from '../model/promo/promo.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly API_URL="http://localhost:8072"
  constructor(private httpClient: HttpClient){}
  getCars(): Observable<ResidentModule[]> {
    return this.httpClient.get<ResidentModule[]>(`${this.API_URL}/recherche/get`);
  }
  addCar(car: any) {
    return this.httpClient.post(`${this.API_URL}/recherche/residents`, car);

  }
  add(car: any) {
    return this.httpClient.post(`${this.API_URL}/get/valeur`, car);

  }
  addPromo(car: any) {
    return this.httpClient.post(`${this.API_URL}/Promotion/addpromo`, car);

  }
  deleteCar(carId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_URL}/recherche/resident/${carId}`);
  }
  delete(Id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_URL}/get/generale/${Id}`);
  }
  deletep(Id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_URL}/Promotion/deletep/${Id}`);
  }

  updateCar(car: any): Observable<any> {
    return this.httpClient.put<any>(`${this.API_URL}/recherche/res/${car.id}`, car);
  }
  getalls(idCarte: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/getall/${idCarte}`);
  }
  getdata(nom: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/getdata/${nom}`);
  }
  getchambre(chambre: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/getchambre/${chambre}`);
  }
  getdate1(date: Date): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/dates/${date}`);
  }
  getdate2(date: Date): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/dates/${date}`);
  }
  getnom(nom: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/getdata/${nom}`);
  }
  getchambre2(chambre: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/getchambre/${chambre}`);
  }
  getdepart(date: Date): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/dates/${date}`);
  }
  getarrive(date: Date): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/recherche/dates/${date}`);
  }
  getvariable(): Observable<any> {
    return this.httpClient.get<GeneraleModule[]>(`${this.API_URL}/get/donnees`);
  }
  getPromotion(): Observable<any> {
    return this.httpClient.get<PromoModule[]>(`${this.API_URL}/Promotion/getpromo`);
  }

}
