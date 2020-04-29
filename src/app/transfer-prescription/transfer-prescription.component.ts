import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfer-prescription',
  templateUrl: './transfer-prescription.component.html',
  styleUrls: ['./transfer-prescription.component.scss'],
})
export class TransferPrescriptionComponent implements OnInit {

  locationName: any;
  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.locationName = this.router.getCurrentNavigation().extras.state;
        console.log("in location page", this.locationName)
      }
    });

  }
  ngOnInit() { }

}
