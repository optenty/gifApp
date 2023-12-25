import { Component } from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";
import {first} from "rxjs";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){}

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  searchTags(busqueda:string){
    return this.gifsService.searchTag(busqueda);
  }


}
