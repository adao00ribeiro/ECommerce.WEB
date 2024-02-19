import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapFacebook, bootstrapLinkedin, bootstrapInstagram } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, NgIconComponent],
  viewProviders: [provideIcons({ bootstrapFacebook, bootstrapLinkedin, bootstrapInstagram })],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
