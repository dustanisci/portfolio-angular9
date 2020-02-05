import { Injectable } from '@angular/core';
import { ApiService } from '@shared/api/api.service';
import { Observable } from 'rxjs';
import { endpoint } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private apiService: ApiService) { }

  public dataNavbar(): Observable<object> {
    return this.apiService.get(endpoint.navbar);
  }
}
