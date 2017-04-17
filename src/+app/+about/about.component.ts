import {Component, Inject, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {Meta} from "../../angular2-meta";


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'about',
  template: 'About component <button (click)="teg()">Submit2</button>'
})
export class AboutComponent implements OnInit {
  constructor(@Inject('req') req: any, private meta: Meta ) {
  }

  ngOnInit() {
    this.meta.setTitle('Tuitle About');
    this.meta.updateMeta('description', 'test2Route');
  }


}
