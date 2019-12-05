import { Component, OnInit,TemplateRef } from '@angular/core';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  constructor(private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  hidePopUp() {
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
