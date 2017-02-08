import { IAllUserData } from './../../../shared/dto/all-user-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(): Observable<IAllUserData> {
    return this.http.get('/api/threads')
      .map(x => x.json());
  }

}
