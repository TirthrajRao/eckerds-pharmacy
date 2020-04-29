import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  details: any
  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.details = this.router.getCurrentNavigation().extras.state;
        console.log("in location page", this.details)
      }
    });

  }

  ngOnInit() { }


  getForm(data) {
    console.log(data);
    if (this.details) {
      let navigationExtras: NavigationExtras = {
        state: data
      };
      this.router.navigate(['/home/' + this.details], navigationExtras);
    } else {
      console.log("other router link")
    }
  }
}
