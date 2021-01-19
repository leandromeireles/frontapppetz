import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteCadastrarEditarRoutingModule } from './cliente-cadastrar-editar-routing.module';
import { ClienteCadastrarEditarComponent } from './cliente-cadastrar-editar/cliente-cadastrar-editar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DialogoConfirmacaoModule } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.module';

@NgModule({
    declarations: [ClienteCadastrarEditarComponent],
    imports: [
        CommonModule,
        ClienteCadastrarEditarRoutingModule,
        DialogoConfirmacaoModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,

        MatToolbarModule,
        MatButtonModule
    ]
})
export class ClienteCadastrarEditarModule { }
