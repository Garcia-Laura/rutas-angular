import { Component } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrl: './empleados-list.component.css'
})
export class EmpleadosListComponent {
listEmpleados: Empleado[] = [
  {legajo: 1, nombre: 'Juan', apellido: 'Pérez', sexo: 'Masculino', salario: 25000},
  {legajo: 2, nombre: 'Marcos', apellido: 'González', sexo: 'Masculino', salario: 65000},
  {legajo: 3, nombre: 'Marta', apellido: 'García', sexo: 'Femenino', salario: 75000},
  {legajo: 4, nombre: 'Ignacio', apellido: 'Cortes', sexo: 'Masculino', salario: 85000},
  {legajo: 5, nombre: 'María', apellido: 'Navarro', sexo: 'Femenino', salario: 95000}

]
radioButtonSeleccionado = 'Todos';


// Creamos un metodo para contar todos los registro del array anterior
obtenerTotalEmpleados(): number{
  return this.listEmpleados.length;
}

obtenerTotalFemeninos(): number{
  return this.listEmpleados.filter (list => list.sexo ==='Femenino').length
}
obtenerTotalMasculinos(): number{
  return this.listEmpleados.filter (list => list.sexo ==='Masculino').length
}

empleadoCountRadioButtonChange(radioButtonSelec: string): void{
  this.radioButtonSeleccionado = radioButtonSelec;
}
}
