import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ToolbarEffectService {
  subject = new Subject<any>();
  replaceSubject= new Subject<any[]>();
  constructor() {}

  applyEffect(effect: string = ''): void {
    this.subject.next(effect);
  }

  applyReplace(arrTexts: string[]): void{
    this.replaceSubject.next(arrTexts);
  }

  onEffect(): Observable<any> {
    return this.subject.asObservable();
  }

  onReplace(): Observable<any> {
    return this.replaceSubject.asObservable();
  }
}
