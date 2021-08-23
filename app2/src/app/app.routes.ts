import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';

import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

// depois rotas tem que falar com angular atribuido no module
export const ROUTES: Routes = [
  { path: '',component: HomeComponent },
  { path: 'restaurantes',component: RestaurantesComponent },
  { path: 'diversao',component: DiversaoComponent },
  //passando paramentros oferta com id
  { path: 'oferta', component: HomeComponent},
  //exemplo podemos acessar o subId outra rota, ofertaComponent  path: 'oferta/:id/:subId'
  { path: 'oferta/:id', component: OfertaComponent,
   children: [
     { path: '', component: ComoUsarComponent },
     {path: 'como-usar', component: ComoUsarComponent},
     {path: 'onde-fica', component: OndeFicaComponent}
  ]
  },
    //navegar ordem de compra
  {path:'ordem-compra', component: OrdemCompraComponent }

];

//export const ApproutesRoutes = RouterModule.forChild(routes);
