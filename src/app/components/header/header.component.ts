import { AfterViewInit, Component, Injector, OnInit, Type, ViewChild, computed, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCart, bootstrapHeart } from '@ng-icons/bootstrap-icons'
import { heroUser } from '@ng-icons/heroicons/outline'
import { InputsearchComponent } from '../inputsearch/inputsearch.component';
import { SidecartComponent } from '../sidecart/sidecart.component';
import { ModalComponent } from '../modal/modal.component';
import { FormloginComponent } from '../formlogin/formlogin.component';
import { ModalService } from '../../services/modal/modal.service';
import { IDynamicComponent } from '../../Interface/IDynamicComponent';
import { FormregisterComponent } from '../formregister/formregister.component';
import { DynamicComponentDirective } from '../../Directives/DynamicComponent.directive';
import { DynamicComponentService } from '../../services/dynamicComponent/DynamicComponent.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent, InputsearchComponent, SidecartComponent, ModalComponent, DynamicComponentDirective],
  viewProviders: [provideIcons({ heroUser, bootstrapHeart, bootstrapCart })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  showDropdown: boolean = false;
  IsShowSideCart: boolean = false;

  @ViewChild(DynamicComponentDirective) DynamicComponentDirective!: DynamicComponentDirective;
  @ViewChild(ModalComponent) modalcomponent!: ModalComponent;

  constructor(protected modalservice: ModalService, private dynamicService: DynamicComponentService, private injector: Injector) {

  }

  ngAfterViewInit(): void {
    // Executa após a visualização dos componentes filhos
    this.waitForModalComponent();
  }
  waitForModalComponent(): void {
    if (this.modalcomponent) {

      // O componente modal está pronto
      const isOpenSignal = this.modalservice.GetIsOpenModal('modal');

      effect(() => {
        if (isOpenSignal()) {

          this.loadComponent();
        }
      }, { injector: this.injector });

    } else {
      // Tenta novamente após um pequeno intervalo
      setTimeout(() => this.waitForModalComponent(), 100);
    }
  }
  SetSideCart() {
    this.IsShowSideCart = !this.IsShowSideCart;
  }
  loadFormLoginComponent() {
    this.modalservice.open('modal')
    this.dynamicService.setcomponent(FormloginComponent);
  }
  loadFormRegisterComponent() {
    this.modalservice.open('modal')
    this.dynamicService.setcomponent(FormregisterComponent);
  }
  loadComponent() {
    const viewContainerRef = this.DynamicComponentDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<IDynamicComponent>(
      this.dynamicService.GetComponent()
    );
  }
}
