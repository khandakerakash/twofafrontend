import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable()
export class ApiService {
  
    apiUrl = environment.apiUrl;
    //selectedApiUrl = environment.selectedApiUrl;


    constructor(private http: HttpClient) { }


    public get<T>(url: string, params? ): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}${url}`,{params:params});
    }


    public post<T>(url: string, body): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}${url}`, body);
    }


    public put<T>(url: string, body): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}${url}`, body);
    }


    public delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}${url}`);
    }


    public patch<T>(url: string, body: string): Observable<T> {
        return this.http.patch<T>(`${this.apiUrl}${url}`, body);
    }


}
