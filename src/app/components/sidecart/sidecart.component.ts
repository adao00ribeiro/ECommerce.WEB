import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidecart',
  standalone: true,
  imports: [],
  templateUrl: './sidecart.component.html',
  styleUrl: './sidecart.component.scss'
})
export class SidecartComponent implements OnInit {


  @Output()
  clickExit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {

    if (event.target === event.currentTarget) {
      this.clickExit.emit();
    } else {
      event.stopPropagation();
    }
  }

}
