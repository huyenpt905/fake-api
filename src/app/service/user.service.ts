import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservedValueOf } from "rxjs";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private API = "https://fake-rest-api-nodejs.herokuapp.com";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.API}/users`);
  }

  getUserById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.API}/users/${id}`);
  }

  setUser(data: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.API}/users`, data);
  }

  updateUser(id: number, data: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.API}/users/${id}`, data);
  }

  deleteUser(id: number): Observable<{}> {
    return this.http.delete(`${this.API}/users/${id}`);
  }
}
