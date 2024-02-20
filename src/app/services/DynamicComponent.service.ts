import { Injectable, Type, ViewChild, ViewContainerRef, signal } from '@angular/core';
import { DynamicComponentDirective } from '../Directives/DynamicComponent.directive';
import { IDynamicComponent } from '../Interface/IDynamicComponent';
import { FormloginComponent } from '../components/formlogin/formlogin.component';
import { FormregisterComponent } from '../components/formregister/formregister.component';
import { HeaderComponent } from '../components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  component = signal<Type<any>>(FormloginComponent)

  setcomponent(component: Type<any>) {
    this.component.set(component);
  }
  GetComponent() {
    return this.component();
  }
}
