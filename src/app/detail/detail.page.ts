import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  weather: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.weather = JSON.parse(params.special);
        console.log(this.weather)
      }
    })
  }
  
  ngOnInit() {
	}

  save() {
    var Entries = JSON.parse(localStorage.getItem("fav"));
		
		if(Entries == null) Entries = [];
		
		localStorage.setItem("fav", JSON.stringify(this.weather));

		Entries.push(this.weather);
		localStorage.setItem("fav", JSON.stringify(Entries));
		
	}
}
