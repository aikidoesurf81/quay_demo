import { Component } from '@angular/core';
import { ApisService } from './services/apis.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quay';

  cards: any[];
  image: string;

  constructor(
    public apisService: ApisService,
  ) { 
    this.getCards();
   }

  
  getCards(){
    this.apisService.GetCards().subscribe((data:any) => {
      console.log('data', data);
      this.cards = data.Items;
    })
  }


}

