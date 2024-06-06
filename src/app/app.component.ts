import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'provaPerCapire';
  nome: string = "ciaoo";

  lista: string[] = ["pilota 35", "pilota 2", "pilota 43", "pilota 88"];

  persona1: { nome: string, cognome: string, eta: number } = {
    nome: 'Luca',
    cognome: 'Gallo',
    eta: 34
  };

  persone: { nome: string, cognome: string, eta: number }[] = [
    {
      nome: "Mario",
      cognome: "Lombardo",
      eta: 28
    },
    {
      nome: "Tullio",
      cognome: "Trapezio",
      eta: 55
    },
    {
      nome: "Federico",
      cognome: "Di Luciano",
      eta: 32
    }
  ]

}
