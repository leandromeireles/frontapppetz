import { Component, OnInit } from '@angular/core';
import { Pet } from '../../pet.moldel';
import { PetService } from '../../pet.service';
import { Page, PageRequest } from "src/app/_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-pet-listar',
  templateUrl: './pet-listar.component.html',
  styleUrls: ['./pet-listar.component.css']
})
export class PetListarComponent implements OnInit {


  colunasTabela = ["id", "nome"];

  page: Page<Pet> = new Page([], 0);
  pageEvent: PageEvent;
  sortEvent: Sort;

  carregando = false;
  formGroupPesquisa: FormGroup;
  
  constructor(private petService: PetService, private matSnackBar: MatSnackBar, private formBuilder: FormBuilder) {
    

    
  }
  

    ngOnInit() {

        this.formGroupPesquisa = this.formBuilder.group({
            nome: [null],
        });
        this.listarPets();
    }

    limparPesquisa() {
    
        this.formGroupPesquisa.reset();
    
        
        this.listarPets();
    }

    listarPets() {
        this.carregando = true;
        const queryAdicional = new Map();
        
        if (this.formGroupPesquisa.value.nome) {
            queryAdicional.set("nome_like", this.formGroupPesquisa.value.nome);
        }
        
        this.petService
            .listar(
                new PageRequest(
                    {
                        pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
                        pageSize: this.pageEvent ? this.pageEvent.pageSize : 5,
                    },
                    {
                        property: this.sortEvent ? this.sortEvent.active : "id",
                        direction: this.sortEvent ? this.sortEvent.direction : "asc",
                    },
                    queryAdicional
                )
            )
            .pipe(take(1))
            .subscribe(
                (page) => {
                    this.page = page;
                    this.carregando = false;
                },
                (error) => {
                    this.page = new Page([], 0);
                    this.carregando = false;
                    this.matSnackBar.open("Erro ao listar itens", undefined, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
    }
}
