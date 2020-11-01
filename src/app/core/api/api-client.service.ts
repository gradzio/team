import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { OurTeamResponse } from '../models/api/our-team-response';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private httpClient: HttpClient) {}

  fetchTeamMembers(): Observable<OurTeamResponse> {
    return this.httpClient.get<OurTeamResponse>(environment.baseUrl);
  }
}
