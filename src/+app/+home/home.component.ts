import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from "@angular/core";

import {ModelService} from "../shared/model/model.service";
import {Meta} from "../../angular2-meta";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  data: any = {};
  constructor(public model: ModelService, private meta: Meta ) {
    this.universalInit();
  }

  ngOnInit() {
   this.meta.setTitle('Tuitle home');
   this.meta.updateMeta('description', 'home test route');
  }

  universalInit() {
    this.model.get('/data.json').subscribe(data => {
      this.data = data;
    });
  }

}
