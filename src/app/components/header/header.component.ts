import { AfterViewInit, Component, Type, ViewChild, computed, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCart, bootstrapHeart } from '@ng-icons/bootstrap-icons'
import { heroUser } from '@ng-icons/heroicons/outline'
import { InputsearchComponent } from '../inputsearch/inputsearch.component';
import { SidecartComponent } from '../sidecart/sidecart.component';
import { ModalComponent } from '../modal/modal.component';
import { FormloginComponent } from '../formlogin/formlogin.component';
import { ModalService } from '../../services/modal.service';
import { IDynamicComponent } from '../../Interface/IDynamicComponent';
import { FormregisterComponent } from '../formregister/formregister.component';
import { DynamicComponentDirective } from '../../Directives/DynamicComponent.directive';
import { DynamicComponentService } from '../../services/DynamicComponent.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent, InputsearchComponent, SidecartComponent, ModalComponent, DynamicComponentDirective],
  viewProviders: [provideIcons({ heroUser, bootstrapHeart, bootstrapCart })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showDropdown: boolean = false;
  IsShowSideCart: boolean = false;
  IsShowModal= signal(false);
  @ViewChild(DynamicComponentDirective) DynamicComponentDirective!: DynamicComponentDirective;

  constructor(protected modalservice: ModalService, private dynamicService: DynamicComponentService) {

    effect(() => {
      if(this.IsShowModal()){
        this.loadComponent();
      }
    });
  }


  SetSideCart() {
    this.IsShowSideCart = !this.IsShowSideCart;
  }
  loadFormLoginComponent() {
    this.IsShowModal.set(true);
    this.dynamicService.setcomponent(FormloginComponent);
  }
  loadFormRegisterComponent() {
    this.IsShowModal.set(true);
    this.dynamicService.setcomponent(FormregisterComponent);
  }
  loadComponent() {
    const viewContainerRef = this.DynamicComponentDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<IDynamicComponent>(
      this.dynamicService.GetComponent()
    );

    this.modalservice.open('modal')
  }
}
