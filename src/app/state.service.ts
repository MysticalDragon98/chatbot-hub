import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PhoneNumber } from 'src/types/PhoneNumber.type';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currentConversation = new ReplaySubject<PhoneNumber>();

  constructor() {}
}
