import { Injectable, Type, ViewChild, ViewContainerRef, signal } from '@angular/core';
import { FormloginComponent } from '../components/formlogin/formlogin.component';


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
