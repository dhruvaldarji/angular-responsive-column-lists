import { Component, Input } from '@angular/core';
import { Item } from '../item.interface';
import { ColumnType } from '../column.enum';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  @Input() list: Item[];

  @Input() columnType: ColumnType;

}