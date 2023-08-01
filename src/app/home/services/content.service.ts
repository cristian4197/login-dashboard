import { Injectable } from '@angular/core';
import { AudioVisualContent } from 'src/app/core/interface/audio-visual.inteface';
import { ANIMESLIST, MOVIESLIST, SERIESLIST } from '../utils/content-media.utils';
import { CONTENTTYPE } from '../const/type-content.constant';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  findItems(itemsToFind:string, typeContent:string):AudioVisualContent[]{
    let updateList:AudioVisualContent[] = [];
    const currenList = this.copyListOriginal(typeContent);
    updateList = this.filterItemsToName(currenList,itemsToFind,typeContent);
    
    return updateList;
  }

  copyListOriginal(typeContent:string):AudioVisualContent[] {
    const {movies, animes, series} = CONTENTTYPE;
    const content = {
      [movies]: [...MOVIESLIST],
      [animes]: [...ANIMESLIST],
      [series]: [...SERIESLIST]
    }
    let list:AudioVisualContent[] =[];
    
    list = content[typeContent];
    
    return list;
  }

  private filterItemsToName(list:AudioVisualContent[],itemsToFind:string,typeContent:string ):AudioVisualContent[]{
    const originalList = this.copyListOriginal(typeContent);
    list = this.findMatchesOnNameCharacters([...list], itemsToFind);
    //Si no encuentra coincidencia muestra la lista total
    return (list.length>0) ? list : originalList;
  }

  private findMatchesOnNameCharacters(list:AudioVisualContent[],itemsToFind:string) {
    const filter = this.removeBlanksSpace(itemsToFind); // Carácter a buscar en el nombre de los objetos, borrando los espacios en blanco
    const regex = new RegExp(filter, 'i'); // Expresión regular para buscar el carácter, insensible a mayúsculas y minúsculas
    const listFound = list.filter((item) => regex.test(item.name));
    
    return listFound;
  }

  removeBlanksSpace(itemsToFind:string):string{
    if(!itemsToFind){
      return '';
    }
    const item = itemsToFind.replace(/\s+/g,'');
    
    return item;
  }
}
