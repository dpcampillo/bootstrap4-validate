import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorMessage, infoMessage } from './messages-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap4';
  dataForm: FormGroup;


  constructor(private fbuilder: FormBuilder){
    this.dataForm = fbuilder.group({
      campo: ['', Validators.compose([Validators.required, Validators.email])],
      textarea:['', Validators.required]
    })
  }

  onSubmit(){
    console.log('ha hecho click en enviar')
    if(!this.dataForm.invalid){
      infoMessage('Datos enviados', 'El formualrio es valido')
    }else{
      errorMessage('Validar campos', 'Los campos del formulario no son validos')
    }
  }

}
