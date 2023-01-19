import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DropDown } from '../../models/dropdown.model';


@Component({
  selector: 'app-multipale-dropdown [dropdownList][dropdownSettings]',
  templateUrl: './multipale-dropdown.component.html',
  styleUrls: ['./multipale-dropdown.component.scss']
})
export class MultipaleDropdownComponent implements OnInit {
  @Input() items : DropDown[] = [] ;
  @Input() dropdownSettings: any ;
  // @Input() dropdownList : any[] = [];
  // @Input() dropdownSettings:IDropdownSettings={};
  // selectedItem : any[] = [] ;
  // @Output() itemChange : EventEmitter<DropDown[]> = new EventEmitter<DropDown[]>() ;
  @Input() dropdownList : any[] = [];
  // dropdownSettings:IDropdownSettings={};


  constructor() { }

  ngOnInit(): void {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Item1' },
    //   { item_id: 2, item_text: 'Item2' },
    //   { item_id: 3, item_text: 'Item3' },
    //   { item_id: 4, item_text: 'Item4' },
    //   { item_id: 5, item_text: 'Item5' }
    // ];
    // this.dropdownSettings = {
    //   idField: 'item_id',
    //   textField: 'item_text',
    // };

  }
  // onValueChange(value : any) : void {
  //   let id = value.target.value;
  //   let items = this.items.filter (i => i.id == id) ;
  //   this.itemChange.emit(items) ;
  // }

}
