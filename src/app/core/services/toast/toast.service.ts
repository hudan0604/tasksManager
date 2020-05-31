import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { ToastModel } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastConfig = new BehaviorSubject<ToastModel | string>('close');

  constructor() { }

  openToast(state: 'success' | 'error', body: string) {
    this.toastConfig.next({
      status: state,
      action: 'open',
      content: body
    });
    setTimeout(() => {
      this.closeToast();
    }, 5000);
  }

  closeToast() {
    this.toastConfig.next({
      action: 'close'
    });
  }
}
