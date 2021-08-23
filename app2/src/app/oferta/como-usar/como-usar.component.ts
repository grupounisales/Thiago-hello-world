import { Component, OnInit } from '@angular/core';
//trabalhando com rotas ActivatedRoute
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.services';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService],
})
export class ComoUsarComponent implements OnInit {
  //erro tinha que ser string nao any
  public ondeFica: any = '';

  //ativando ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  //acessando parametros das rota pai
  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => {
      //console.log('ID da rota pai:', this.route.parent.snapshot.params['id'])
      this.ofertasService
        .getComoUsarOfertaPorId(parametros.id)
        .then((descricao: any) => {
          //console.log(resposta)
          return (this.ondeFica = descricao);
        });
    });
  }
}
