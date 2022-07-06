import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public fav;
  
  constructor(private platform: Platform) {
    this.fav = JSON.parse(localStorage.getItem('fav'));
    console.log(this.fav);
  }

  ngOnInit() {
    this.getFav();
  }

	ionViewWillEnter() {
		this.getFav();
		
	}

  getFav() {
		this.fav = JSON.parse(localStorage.getItem('fav'));
		console.log(this.fav);
		
	}
}
