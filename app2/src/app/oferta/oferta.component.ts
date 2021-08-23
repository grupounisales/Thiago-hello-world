import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Oferta} from '../shared/oferta.model';
import {OfertasService} from '../ofertas.services';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  public oferta: any
  public oferta1: Oferta[] = []

  //private route: ActivatedRoute

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {
    
   }
   //tirar snapshot da rota e acessar o parametro que está sendo recebido, import activatedRoute
  ngOnInit(): void {
   //console.log('ID recuperado da',this.route.snapshot.params['id'])
   //console.log('SubID recuperado da',this.route.snapshot.params['subId'])

   // parametros executar os metodos, executar promess id atualizado das rotas combinar

   this.route.params.subscribe((parametros: Params) => {
    this.ofertasService.getOfertasPorId(parametros.id)
    .then(
     (oferta: Oferta[]) => {
       this.oferta = oferta 
       //console.log(this.oferta)
       })
  
   })

  }

}
