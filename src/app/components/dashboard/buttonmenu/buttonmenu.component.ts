import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttonmenu',
  standalone: true,
  imports: [],
  templateUrl: './buttonmenu.component.html',
  styleUrl: './buttonmenu.component.scss'
})
export class ButtonmenuComponent {

  @Input()
  descricao = '';

  @Output()
  buttonclick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    this.buttonclick.emit();
  }

}
