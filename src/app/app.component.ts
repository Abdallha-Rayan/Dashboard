import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { DropDown } from './shared/models/dropdown.model';
import { DropdownService } from './shared/services/dropdown.service';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit , OnDestroy {
  title = 'finalProject';
  subscription : Subscription [] = [] ;
  items : any[] = [
    {id : 1 , name : 'Computer Network'} ,
    {id : 2 , name : 'Accounting'}
  ] ;
  items2 : any[] = [
    {id : 1 , name : 'Test1'} ,
    {id : 2 , name : 'Test2'}
  ]
  selectedItem : any = null ;

  dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];
    dropdownSettings  = {
        idField: 'item_id',
        textField: 'item_text',
      };

  constructor(private dropDown: DropdownService){

  }


  onItemChange(item : any , type : string) : void{
    if (type == 'Selection1') {
      this.selectedItem = item;
    }
    else {
      console.log(item)
    }
  }
  ngOnInit():void{
  this.dropDown. setInAllData()

  console.log(this.dropdownList)


  }
  ngOnDestroy() : void {

  }


}
