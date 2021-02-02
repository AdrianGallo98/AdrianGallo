import { Component, OnInit } from '@angular/core';
import {faBullseye, faCode} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  faBullseye = faBullseye;
  faCode = faCode;
  ngOnInit(): void {
  }

}
