//llamando al decorador component
import{Component} from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html',
})

export class BodyComponent{
   // autor='Cristhian Jack'
    //mensaje='Esto es un texto generado por cristhian esta bien gogogogogo'
    mostrar="true"
    autor:any={nombre:'Cristhian Jack', mensaje:'esto es un mensaje go go go go'}

    nombres:string[]=["Juan","Luis","Cristhian","Ernesto","Brandon","Paola","Diana","Milagros","Fiorella"];

    imagen = "toby";

    productos = [
        {
          id: '1',
          image: 'assets/img/borrador.jpg',
          title: 'borrador',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '2',
          image: 'assets/img/lapicero.jpg',
          title: 'lapicero',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '3',
          image: 'assets/img/cuaderno.jpg',
          title: 'cuaderno',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '4',
          image: 'assets/img/lustre.jpeg',
          title: 'lustre',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '5',
          image: 'assets/img/resaltador.jpg',
          title: 'resaltador',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
        {
          id: '6',
          image: 'assets/img/tajador.jpg',
          title: 'tajador',
          price: 80000,
          description: 'estos útiles escolares en su gran mayoría,'
        },
      ];

      perros = [
        {
          id: '1',
          image: 'assets/img/firu.jpg',
          nombre: 'Firulais'          
        },
        {
            id: '2',
            image: 'assets/img/toby.jpg',
            nombre: 'toby'          
          },
          {
            id: '3',
            image: 'assets/img/firu.jpg',
            nombre: 'Rambo'          
          },
          {
            id: '4',
            image: 'assets/img/firu.jpg',
            nombre: 'Chusco'          
          },
        
      ];  

}