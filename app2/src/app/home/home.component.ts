import { Component, OnDestroy, OnInit} from '@angular/core';

import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {

  // public ofertas: any[] = [];
  public ofertas: any[] = [];
   public ofertas1:  Oferta[] = [];
   ofertasService: OfertasService

  constructor( ofertasService: OfertasService) {
    //this.ofertasService = new OfertasService();
    this.ofertasService = ofertasService;
   }

  ngOnInit() {
    //metodo responsavel retorna um array de oferta em service
    //this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas)

     this.ofertasService.getOfertas()
     //arrow function recuperando service promise
     .then(
       (ofertas: Oferta[]) => {
         //console.log('Funcão revolver() foi resolvida depois de 3 segundos')
         this.ofertas = ofertas },)

      .catch((param: any) => {
        console.log(param)
      },)

    }

}
