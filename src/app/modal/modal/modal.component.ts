import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import { Observable } from 'rxjs';
import { ModalConfig } from 'src/app/core/models/models';

@Component({
  selector: 'tm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  display$: Observable<'open' | 'close'>;
  /**
   * @param modalConfig : Params to be passed to the modal
   * Enables having a single modal
   * And pass any content that we want to show
   */
  @Input() modalConfig: ModalConfig;

  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
    console.log('content : ', this.modalConfig.content);
  }

  close() {
    this.modalService.close();
  }

}
