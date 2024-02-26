import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-defaultlayout',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './defaultlayout.component.html',
  styleUrl: './defaultlayout.component.scss'
})
export class DefaultlayoutComponent {
  title = 'web';
}
