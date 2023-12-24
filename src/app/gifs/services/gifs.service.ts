import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];


  /*Private para que solo se pueda cambiar la variable dentro de este service*/
  private _tagsHistory: string[] = [];

  private GIPHY_API_KEY :string = "WmHNGRtWCdzMW1Bv1QP4mvJw5XjzgOsd";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";
  get tagsHistory(){
    return [...this._tagsHistory];
  }

   searchTag(tag : string){
    if(tag !==''){
      //unshift es para añadirlo al inicio
      this._tagsHistory.unshift(tag);
    }
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit','10')
      .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).subscribe(response => {
      this.gifList = response.data;
    })

  }

  constructor(private http: HttpClient) { }
}
