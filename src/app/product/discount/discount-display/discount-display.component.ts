import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from '../discount.service';

@Component({
  selector: 'app-discount-display',
  templateUrl: './discount-display.component.html',
  styleUrls: ['./discount-display.component.css']
})
export class DiscountDisplayComponent implements OnInit {

  constructor(private discounter: DiscountService) { }

  ngOnInit() {
  }

}
