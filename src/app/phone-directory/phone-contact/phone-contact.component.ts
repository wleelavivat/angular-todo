import { Component, OnInit } from '@angular/core';
import {PagerDutyService} from '../../shared/pager-duty.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-phone-contact',
  templateUrl: './phone-contact.component.html',
  styleUrls: ['./phone-contact.component.scss']
})
export class PhoneContactComponent implements OnInit {
  private user;
  private contacts = [];

  constructor(private pdService: PagerDutyService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.pdService.getUser(id)
      .subscribe(data => {
        this.user = data['user'];

        this.getContactInformation();
      });
  }

  getContactInformation() {
    this.user.contact_methods.forEach(v => {
      const url = v.self;
      this.pdService.getContactMethod(url)
        .subscribe(data => {
          this.contacts.push(data['contact_method']);
        });
    });
  }

}
