import { Component, OnInit } from '@angular/core';

import { Oferta } from './../shared/oferta.model';
import { OfertasService } from '../ofertas.services';


@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: any[] = []


  constructor(private ofertasService: OfertasService) {

   }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao')
    .then((ofertas: Oferta[]) =>{
      console.log(ofertas)
      this.ofertas = ofertas
      })
  }

}
