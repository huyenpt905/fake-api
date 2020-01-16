import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { VehicleModel } from '../../../../../huyenpt43/VRentVehicle/src/app/models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = 'https://fake-rest-api-nodejs.herokuapp.com';
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.API}/users`);
  }

  setUser(data: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.API}/users`, data);
  }

  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${this.API}/${id}`);
  }

}
