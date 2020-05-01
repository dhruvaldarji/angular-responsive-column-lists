import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { BehaviorSubject, Subject } from 'rxjs';
import { map, filter, takeUntil, startWith } from 'rxjs/operators';

import { Item } from './item.interface';
import { ColumnType } from './column.enum';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  listForm = this.fb.group({
    length: [25],
  });

  listLength$ = this.listForm.get('length')
    .valueChanges
    .pipe(startWith(this.listForm.get('length').value));

  list$ = this.listLength$.pipe(map((len) => this.getItems(len)));

  columnType$ = new BehaviorSubject<ColumnType>(ColumnType.flex);

  blankItems$ = new BehaviorSubject((new Array(500)).fill(null));

  constructor(private fb: FormBuilder) {}

  changeColumnType(ct: ColumnType) {
    this.columnType$.next(ct);
  }

  private getItems(len: number): Item[] {
    return (new Array(len)).fill(null).map((val, index) => {
      const item = {
        id: index + 1,
        name: `Item: ${index + 1}`,
      };
      return item;
    });
  }
}
