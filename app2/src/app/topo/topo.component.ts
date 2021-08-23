import { Component, OnInit } from '@angular/core'
import { OfertasService } from '../ofertas.services'

import { Observable } from 'rxjs/Observable' 
import {Subject} from 'rxjs'

import { Oferta} from '../shared/oferta.model'

import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators'
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  //public ofertas2: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()


  constructor(private ofertasService:OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), // executa a ação depois do tempo passado
      distinctUntilChanged(), //se o termo for diferente do termo anterior, ele executa uma nova requisição
      switchMap((termo: string) => {
        if (termo.trim() == '') {
           return of<Oferta[]>([])
        }
        return this.ofertasService.pesquisaOfertas(termo)
       }),
       catchError ((erro) => {
         console.log(erro)
         return of<Oferta[]>([])
        })
    )
        //retorno pesquisa de ofertas titulo topo
        // this.ofertas.subscribe((ofertas: Oferta[])=> {
        //   console.log(ofertas)
        //  return this.ofertas2 = ofertas
        //   })   
  }

    public pesquisa(termoDabusca: string): void{
            //console.log((<HTMLInputElement>event.target).value)
           //console.log(termoDaPesquisa)
          // this.ofertas = this.ofertasService.pesquisaOfertas(termoDabusca)
         // this.ofertas.subscribe(
        // (ofertas: Oferta[])=> console.log(ofertas) )
       //usando subject
        console.log('Keyup caracter:', termoDabusca)
      this.subjectPesquisa.next(termoDabusca)
    }   

    public limpaPesquisa(): void {
      this.subjectPesquisa.next('')
    }

}


