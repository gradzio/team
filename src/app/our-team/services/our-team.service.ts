import { Injectable } from '@angular/core';
import { ApiClientService } from 'src/app/core/api/api-client.service';
import { map } from 'rxjs/operators';
import { mapToOurTeam } from 'src/app/core/mappers/our-team-mapper';
import { Observable } from 'rxjs';
import { OurTeam } from 'src/app/core/models/presentation/our-team';

@Injectable({
  providedIn: 'root',
})
export class OurTeamService {
  constructor(private apiClientService: ApiClientService) {}

  ourTeam$(): Observable<OurTeam> {
    return this.apiClientService.fetchTeamMembers().pipe(map((apiResponse) => mapToOurTeam(apiResponse)));
  }
}
