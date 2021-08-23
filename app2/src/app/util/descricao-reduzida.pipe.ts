import { Pipe, PipeTransform } from "@angular/core";
//reduzir tamanho de pesquisa quando passar de 15 truncar colocando 3 pontos.

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{

    transform(texto: string, truncarEm: number): String {
        if(texto.length > truncarEm){
            return texto.substring(0, truncarEm) + '...'
        }

        return texto
    }
}