import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CRUDAdminGlobalComponent } from '../crud-admin-global/crud-admin-global.component';

@Component({
  selector: 'app-update-admin-local',
  standalone: true,
  imports: [FormsModule,CommonModule,CRUDAdminGlobalComponent],
  templateUrl: './update-admin-local.component.html',
  styleUrl: './update-admin-local.component.css'
})
export class UpdateAdminLocalComponent {
  user = {
    cedula: '',
    nombre: '',
    contrasena: '',
    numero: '',
    correo: ''
  };
  formSubmitted = false;
  @ViewChild('registerForm', { static: false }) registerForm!: NgForm;
  onSubmit() {
    this.formSubmitted=true;
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    if (this.registerForm.valid) {
      // Si el formulario es válido, puedes continuar con el envío de datos o cualquier otra acción
      console.log(this.user);
    } else {
      // Si el formulario no es válido, no hagas nada o muestra un mensaje de error
      console.log('El formulario contiene errores.');
    }
    
  }
}
