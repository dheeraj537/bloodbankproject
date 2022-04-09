import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
@Injectable({
  providedIn: 'root'
})
export class BlooddonorService {
  blood_donor_api=environment.blood_donor_api
  constructor(private http:HttpClient) { }
  
  GetBloodDonors():Observable<BloodDonor[]>
  {
    return this.http.get<BloodDonor[]>(this.blood_donor_api+'GetBloodDonors')
  }
  AddBloodDonor(item:BloodDonor):Observable<any>
  {
    return this.http.post<string>(this.blood_donor_api+'AddBloodDonor',item);
  }
  UpdateBloodDonor(item:BloodDonor):Observable<any>
  {
    return this.http.put(this.blood_donor_api+'UpdateBloodDonor',item);
  }
  DeleteBloodDonor(bloodDonorId:number):Observable<any>
  {
    return this.http.delete(this.blood_donor_api+'DeleteBloodDonor/'+bloodDonorId);
  }
  AddBloodDonorDonation(item:BloodDonorDonation):Observable<any>
  {
    return this.http.post(this.blood_donor_api+'AddBloodDonorDonation',item);
  }
}