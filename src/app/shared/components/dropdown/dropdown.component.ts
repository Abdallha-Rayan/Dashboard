import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropDown } from '../../models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() label : string | undefined ;
  @Input() items : DropDown[] = [] ;
  @Output() itemChange : EventEmitter<DropDown> = new EventEmitter<DropDown>();

  constructor() { }

  ngOnInit(): void {
  }
  onValueChange(value : any) : void {
    let id = value.target.value;
    let item = this.items.find (i => i.id == id) ;
    this.itemChange.emit(item) ;
  }

}
