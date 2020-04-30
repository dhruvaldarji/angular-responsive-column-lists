import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, map } from 'rxjs/operators';

@Component({
  selector: 'app-current-page',
  templateUrl: './current-page.component.html',
  styleUrls: ['./current-page.component.scss']
})
export class CurrentPageComponent {

  name$ = this.route.params.pipe(
    pluck('item'),
    map((val) => {
      return  (val == undefined) ? 'Home' : `Item ${val}`;
    }),
  );

  constructor(private route: ActivatedRoute) {}

}