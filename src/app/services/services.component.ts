import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {}

  getLocation(data){
    let navigationExtras: NavigationExtras = {
      state: data
    };
    this.router.navigate(['/home/location'], navigationExtras);
  }

}
