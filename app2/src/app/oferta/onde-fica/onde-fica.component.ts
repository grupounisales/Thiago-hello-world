import { Component, OnInit } from '@angular/core';

//trabalhando com rotas ActivatedRoute
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.services';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService],
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: any = '';

  //ativando ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  //acessando parametros das rota pai
  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => {

      this.ofertasService
        .getOndeFicaOfertaPorId(parametros.id)
        .then((descricao: any) => {
          //console.log(resposta)
          return (this.ondeFica = descricao);
        });
    });
  }
}
