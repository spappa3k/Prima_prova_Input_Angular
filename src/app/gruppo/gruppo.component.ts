import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gruppo',
  templateUrl: './gruppo.component.html',
  styleUrl: './gruppo.component.css'
})
export class GruppoComponent {

@Input()
gruppoPersone:{nome:string,cognome:string,eta:number}=
{
nome:"",
cognome:"",
eta:0
}

}
