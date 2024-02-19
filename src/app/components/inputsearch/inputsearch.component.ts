import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'app-inputsearch',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ heroMagnifyingGlass })],
  templateUrl: './inputsearch.component.html',
  styleUrl: './inputsearch.component.scss'
})
export class InputsearchComponent {

}
