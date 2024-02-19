import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICart } from '../../Interface/ICart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidecart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidecart.component.html',
  styleUrl: './sidecart.component.scss'
})
export class SidecartComponent implements OnInit {

  cart: ICart[] = [
    {

    },
    {

    },
    {

    }, {

    },
    {

    },
    {

    },
    {

    },
    {

    },
  ]

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
