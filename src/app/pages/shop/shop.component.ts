import { Component } from '@angular/core';
import { GriditemsComponent } from '../../components/griditems/griditems.component';
import { InputsearchComponent } from '../../components/inputsearch/inputsearch.component';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [GriditemsComponent, InputsearchComponent, NgIconComponent],
  viewProviders: [provideIcons({ heroMagnifyingGlass })],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
