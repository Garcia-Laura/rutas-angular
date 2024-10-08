import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrl: './count-empleados.component.css'
})
export class CountEmpleadosComponent {
  @Input() todos:number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();
  constructor() {
    this.todos=0;
    this.masculino=0;
    this.femenino=0;
  }
  
  
  radioButtonSeleccionado = 'Todos';

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
}
