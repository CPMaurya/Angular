import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  title = 'user Define item lists';
  // itemlist = ["Item1", "Item2", "Item2"];
  todayDate;

  itemlist = [
    {
      name: 'Item 1',
      slug: 'Item-1',
      embed: `6wD4V0rvlDI`,
    },
    {
      name: 'Item 2',
      slug: 'Item-2',
      embed: `nzyJ9imm29w`,
    },
    {
      name: 'Item 3',
      slug: 'Item-3',
      embed: `lYvmbQiFnXE`,
    }
  ];
  location: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.todayDate = new Date();
  }
  getEmbedUrl(item) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed );
  }

}
