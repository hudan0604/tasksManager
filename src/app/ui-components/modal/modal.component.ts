import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  display$: Observable<'open' | 'close'>;
  @Input() title: string;

  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

}
