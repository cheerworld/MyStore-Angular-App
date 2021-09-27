import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';
import { PaymentInfo } from '../../models/confirmation';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  paymentInfo: PaymentInfo = {
    fullName: '',
    address: '',
    creditCardNumber: '',
    total: 0,
  };

  showErrorMsg = true;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.paymentInfo = this.confirmationService.getConfirmation();

    if (this.paymentInfo.fullName !== '') {
      this.showErrorMsg = false;
    }
    console.log(this.paymentInfo);
  }
}
