import { Component, OnInit } from '@angular/core';

// import { fagithub } from '@fortawesome/free-solid-svg-icons';

import {faGithub, faWhatsapp, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

   faGithub = faGithub;
   faWhatsapp=faWhatsapp;
   faLinkedinIn=faLinkedinIn;
   faEnvelope =faEnvelope;

  ngOnInit(): void {
  }

}
