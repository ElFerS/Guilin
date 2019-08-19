import { Component, OnInit } from '@angular/core';
import { DATAPLACES } from '../mock-data';


@Component({
  selector: 'app-block-image',
  templateUrl: './block-image.component.html',
  styleUrls: ['./block-image.component.css']
})
export class BlockImageComponent implements OnInit {
dataplaces=DATAPLACES;
  constructor() { }

  ngOnInit() {
  }

}
