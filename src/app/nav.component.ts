import { Component, OnInit } from '@angular/core'; 

@Component({ 
    selector: 'app-nav',
    template: `
        <h1>Hola desde mi primer componente creado manualmente</h1>
        <p>Parrafo azul</p>
        `,
    styles: [`
        h1{color: red;}
        p{color:blue;}
        `]
}) 

export class NavComponent implements OnInit{ 
    constructor(){}

    ngOnInit(): void {
        console.log('El componente se ha creado correctamente');
    }
}
    