import { Component } from '@angular/core';
import { IDynamicComponent } from '../../Interface/IDynamicComponent';
import { DynamicComponentService } from '../../services/dynamicComponent/DynamicComponent.service';
import { FormregisterComponent } from '../formregister/formregister.component';

@Component({
  selector: 'app-formlogin',
  standalone: true,
  imports: [],
  templateUrl: './formlogin.component.html',
  styleUrl: './formlogin.component.scss'
})
export class FormloginComponent implements IDynamicComponent {
  constructor(private dynamicService: DynamicComponentService) {

  }


  loadFormRegisterComponent() {

    this.dynamicService.setcomponent(FormregisterComponent);
  }
}
