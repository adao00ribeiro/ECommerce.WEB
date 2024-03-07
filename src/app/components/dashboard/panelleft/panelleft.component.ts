import { Component } from '@angular/core';
import { ButtonmenuComponent } from '../buttonmenu/buttonmenu.component';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { bootstrapGrid } from '@ng-icons/bootstrap-icons'
import { NgIconComponent, provideIcons } from '@ng-icons/core';
@Component({
  selector: 'app-panelleft',
  standalone: true,
  imports: [ButtonmenuComponent, NgIconComponent, RouterLink],
  viewProviders: [provideIcons({ bootstrapGrid })],
  templateUrl: './panelleft.component.html',
  styleUrl: './panelleft.component.scss'
})
export class PanelleftComponent {
  menuSelecionado = 'Home';
  // Icones
  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  botaoClick(rota: string) {
    this.router.navigateByUrl(rota);
  }

  colapseClick(id: string) {
    const collapseElement = document.getElementById(id);
    if (collapseElement) {

      console.log(collapseElement.style.display)


      if (collapseElement.style.display === "none") {
        collapseElement.style.display = "block";

      } else {
        collapseElement.style.display = "none";

      }
    }
  }

}
