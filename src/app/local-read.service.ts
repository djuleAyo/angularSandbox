import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalReadService {

  constructor(
    private http: HttpClient
  ) {}

  public getTestTree(): Observable<any> {
    return this.http.get('./assets/testTree.json');
  }

  public getFileIcons(): Observable<any> {
    return this.http.get('./assets/fileIcons.json');
  }
}
