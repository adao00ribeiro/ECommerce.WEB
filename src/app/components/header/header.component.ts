import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCart, bootstrapHeart } from '@ng-icons/bootstrap-icons'
import { heroUser } from '@ng-icons/heroicons/outline'
import { InputsearchComponent } from '../inputsearch/inputsearch.component';
import { SidecartComponent } from '../sidecart/sidecart.component';
import { ModalComponent } from '../modal/modal.component';
import { FormloginComponent } from '../formlogin/formlogin.component';
import { ModalService } from '../../services/modal.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent, InputsearchComponent, SidecartComponent, ModalComponent, FormloginComponent],
  viewProviders: [provideIcons({ heroUser, bootstrapHeart, bootstrapCart }), ModalService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showDropdown: boolean = false;
  IsShowSideCart: boolean = true;

  constructor(protected modalservice: ModalService) { }

  SetSideCart() {
    this.IsShowSideCart = !this.IsShowSideCart;
  }
}
