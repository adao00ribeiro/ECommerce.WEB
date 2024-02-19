import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCart, bootstrapHeart } from '@ng-icons/bootstrap-icons'
import { heroUser } from '@ng-icons/heroicons/outline'
import { InputsearchComponent } from '../inputsearch/inputsearch.component';
import { SidecartComponent } from '../sidecart/sidecart.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent, InputsearchComponent, SidecartComponent],
  viewProviders: [provideIcons({ heroUser, bootstrapHeart, bootstrapCart })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showDropdown: boolean = false;
  IsShowSideCart: boolean = true;



  SetSideCart(){
    this.IsShowSideCart = !this.IsShowSideCart;
  }
}
