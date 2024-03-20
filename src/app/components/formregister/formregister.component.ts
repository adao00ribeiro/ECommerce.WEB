import { Component } from '@angular/core';
import { IDynamicComponent } from '../../Interface/IDynamicComponent';
import { RouterLink } from '@angular/router';
import { DynamicComponentService } from '../../services/dynamicComponent/DynamicComponent.service';
import { FormloginComponent } from '../formlogin/formlogin.component';

@Component({
  selector: 'app-formregister',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './formregister.component.html',
  styleUrl: './formregister.component.scss'
})
export class FormregisterComponent implements IDynamicComponent {



  constructor(private dynamicService: DynamicComponentService) {

  }

  loadFormLoginComponent() {

    this.dynamicService.setcomponent(FormloginComponent);
  }
}
