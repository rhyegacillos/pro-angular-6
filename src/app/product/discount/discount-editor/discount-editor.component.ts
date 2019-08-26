import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from '../discount.service';

@Component({
  selector: 'app-discount-editor',
  templateUrl: './discount-editor.component.html',
  styleUrls: ['./discount-editor.component.css']
})
export class DiscountEditorComponent implements OnInit {

  constructor(private discounter: DiscountService) { }

  ngOnInit() {
  }

}
