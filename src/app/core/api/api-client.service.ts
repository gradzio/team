import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { TeamMembersResponse } from '../models/api/team-members-response';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private httpClient: HttpClient) {}

  fetchTeamMembers(): Observable<TeamMembersResponse> {
    return this.httpClient.get<TeamMembersResponse>(environment.baseUrl);
  }
}
