import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../../interfaces/gifs.interfaces";

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.scss']
})
export class GifsCardComponent implements OnInit{
  ngOnInit(): void {
    if(!this.gifCard) throw new Error ("No estas enviando ningun GIFCARD");

  }


  @Input()
  public gifCard!: Gif;


}
