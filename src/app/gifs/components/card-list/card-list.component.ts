import {Component, Input} from '@angular/core';
import {Gif} from "../../interfaces/gifs.interfaces";

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  /*gifsList tiene que tener el mismo nombre de la propiedad que tenemos que importar del padre html*/
  @Input()
  public gifsList: Gif[]=[];



}
