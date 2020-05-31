import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { ToastModel } from 'src/app/core/models/models';
import { Subscription } from 'rxjs';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tm-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  config: ToastModel;
  toastSub: Subscription;
  faClipboardCheck = faClipboardCheck;
  faExclamationTriangle = faExclamationTriangle;

  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.toastSub = this.toastService.toastConfig.subscribe((config: ToastModel) => {
    this.config = config;
    console.log('status in toast cponent', config.status);
    });
  }

  ngOnDestroy() {
    this.toastSub.unsubscribe();
  }

}
