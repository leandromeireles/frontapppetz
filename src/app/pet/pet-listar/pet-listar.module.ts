import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { PetListarRoutingModule } from './pet-listar-routing.module';
import { PetListarComponent } from './pet-listar/pet-listar.component';

import { FlexLayoutModule } from "@angular/flex-layout";



@NgModule({
  declarations: [PetListarComponent],
  imports: [
    CommonModule,
    PetListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    FlexLayoutModule,
],
})
export class PetListarModule { }
