import { Component } from '@angular/core';
import { ButtonmenuComponent } from '../buttonmenu/buttonmenu.component';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panelleft',
  standalone: true,
  imports: [ButtonmenuComponent],
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

  botaoClick(botao: string){
    this.menuSelecionado = botao;
    this.router.navigateByUrl('player/home');
  }




}
