import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";
import {JsonPipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];


  /*Private para que solo se pueda cambiar la variable dentro de este service*/
  private _tagsHistory: string[] = [];

  private GIPHY_API_KEY: string = "WmHNGRtWCdzMW1Bv1QP4mvJw5XjzgOsd";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));

  }

  private organizeHistory(tag: string){
    if (tag !== '') {
      //unshift es para añadirlo al inicio
      this._tagsHistory.unshift(tag);
      //para que no tenga duplicados:
      this._tagsHistory = [...new Set(this._tagsHistory)];
      // Esto lo que hace es que elimina los 10 primeros items, el resultado de esto seria los 10 primeros que ha eliminado,
      // Entonces le asignamos ese resultado y tenemos los 10 items que queremos
      this._tagsHistory = this.tagsHistory.splice(0, 10);
      this.saveLocalStorage();
    }
  }

  private loadLocalStorage():void{
    if(localStorage.getItem('history')){
      //el parse lo que hace es coger el String que hemos hecho Stringificado y lo transforma a array
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
      if (this._tagsHistory.length > 0) {
        this.searchTag(this._tagsHistory[0]);
      }
    }
  }
  searchTag(tag: string) {

    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params}).subscribe(response => {
      this.gifList = response.data;
    })

  }

  //esto lo hace la primera vez que se carga la página
  constructor(private http: HttpClient) {
    this.loadLocalStorage();

  }
}
