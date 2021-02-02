import { Component, OnInit } from '@angular/core';

import {faGithub, faWhatsapp, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faAt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  
  faAt = faAt;
  faPhoneAlt = faPhoneAlt;
  faGithub = faGithub;
  faLinkedinIn=faLinkedinIn;

  
  ngOnInit(): void {
  }

}
