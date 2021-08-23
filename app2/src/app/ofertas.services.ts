import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { promise } from 'protractor';
import { Oferta } from './shared/oferta.model';

import 'rxjs';

import { URL_API } from './app.api';

import { Observable, throwError } from 'rxjs';

import { map, catchError, retry } from 'rxjs/operators';




//injetando o module http e o injectable
@Injectable()
export class OfertasService {
    //posso passar um paramente ?destaque= true ou false ofertas filtra as informações

    //private url_api = 'http://localhost:3000/ofertas'

  constructor(private http: HttpClient) {}

  //metodo responsavel retorna um array de oferta em service
  public getOfertas(): Promise<Oferta[]> {
    // efetuar um requisção htpp json server  ${this.url_api}?destaque=true  puxa private url_api diretamente do método
      return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`).toPromise()
          .then(function (HttpResponse) {
              console.log(HttpResponse);
              return HttpResponse;
               //retorna um promise Oferta[]
          });
  };

   url = '';

 public getOfertasPorCategoria (categoria: string) : Promise<Oferta[]> {
   //abre é fecha craze contatena uma informação estaticas com uma variavel ${categoria}
   return this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`).toPromise()
   //resposta
          .then(function (HttpResponse) {
              console.log(HttpResponse);
              return HttpResponse;
               //retorna um promise Oferta[]
          });
 }
  public getOfertasPorId(id: any) : Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
    .toPromise()
    .then(function(resposta: HttpResponse<0>){
      //método pode ser chamado ou aplicado para objetos parecidos com arrays.
      //console.log(resposta.shift())
      //console.log(resposta[0])
      return (resposta[0])
    })
  }

  public getComoUsarOfertaPorId(id: number): Promise<Oferta[]>{
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
    .toPromise()
    .then(function(resposta: HttpResponse<0>){
      //método pode ser chamado ou aplicado para objetos parecidos com arrays.
      //console.log(resposta.shift())
      //console.log(resposta[0].descricao)
      return (resposta[0].descricao)
  })
  
 } 
 public getOndeFicaOfertaPorId(id: number): Promise<Oferta[]>{
  return this.http.get(`${URL_API}/onde-fica?id=${id}`)
  .toPromise()
  .then(function(resposta: HttpResponse<0>){
    //método pode ser chamado ou aplicado para objetos parecidos com arrays.
    //console.log(resposta.shift())
    //console.log(resposta[0].descricao)
    return (resposta[0].descricao)
})
} 
  // usando Observable requisições api ofertas baseadas nesse termo class service metodo

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
    .pipe(
      //retorna HttpResponse não any 151
        retry(10),
        map((resposta:any) => resposta),
        catchError((error: any)=> throwError("Algo deu errado!"))       
    );
  }

}

// constructor(private http: HttpClient){}

//
//     public getOfertas(): Promise<OfertaModel[]> {
//
//       return this.http.get<OfertaModel[]>(this.URL).toPromise()
//       .toPromise()
//       .then((resposta: any) => resposta.json())
//
