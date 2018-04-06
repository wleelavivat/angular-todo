import { Component, OnInit } from '@angular/core';
import {PagerDutyService} from '../../shared/pager-duty.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
  private phoneList;

  constructor(private pdService: PagerDutyService) {
  }

  ngOnInit() {
    this.pdService.getUserList()
      .subscribe(data => {
        this.phoneList = data;
      });
  }

}
