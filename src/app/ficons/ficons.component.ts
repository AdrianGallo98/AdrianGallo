import { Component, OnInit } from '@angular/core';
import{faAngular, faHtml5, faCss3, faJsSquare, faGitlab, faNodeJs, faPython, faGithub} from '@fortawesome/free-brands-svg-icons';
import{} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-ficons',
  templateUrl: './ficons.component.html',
  styleUrls: ['./ficons.component.css']
})
export class FiconsComponent implements OnInit {

  constructor() { }
  faAngular=faAngular;
  faHtml5=faHtml5;
  faCss3= faCss3;
  faJsSquare= faJsSquare;
  faGitlab= faGitlab;
  faNodeJs = faNodeJs;
  faPython = faPython;
  faGithub=faGithub
  ngOnInit(): void {
  }

}
