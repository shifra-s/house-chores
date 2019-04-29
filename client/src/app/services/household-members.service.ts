import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HouseholdMember} from '../models/household-member';

@Injectable({
  providedIn: 'root'
})
export class HouseholdMembersService {

  constructor(private httpClient:HttpClient) { }

  get(): Observable<HouseholdMember> {
    return this.httpClient.get<HouseholdMember>('http://localhost:8888/householdmembers')
  }

}
