import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from "lorem-ipsum";
interface Ipokemon {
  name: string;
  id: number;
}
@Component({
  selector: 'app-pokemons',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name='About our Modelbrowser';
  lorem=new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  text=this.lorem.generateParagraphs(10);
  onKey(event: any) { // without type info
  }

  ngOnInit() {
  }

}
