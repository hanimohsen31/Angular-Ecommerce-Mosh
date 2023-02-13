import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() img: any;
  @Input() title: any;
  @Input() prcie: any;
  constructor() {}

  ngOnInit(): void {}
}
