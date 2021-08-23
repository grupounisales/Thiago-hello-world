import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.services';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: any[] = [];
  public ofertas1: Oferta[] = [];
 // public ofertas: Oferta[] = [];

 public dataTeste: any = new Date(2021, 8, 12)

  constructor(private ofertasService: OfertasService) {

  }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) =>{
      console.log(ofertas)
      this.ofertas = ofertas
      })
  }

}
