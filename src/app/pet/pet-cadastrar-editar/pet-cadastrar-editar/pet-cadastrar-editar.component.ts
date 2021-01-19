import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { PetService } from "../../pet.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Pet } from "../../pet.moldel";
import { DialogoConfirmacaoComponent } from "src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: "app-pet-cadastrar-editar",
    templateUrl: "./pet-cadastrar-editar.component.html",
})
export class PetCadastrarEditarComponent implements OnInit {
    
    formGroup :FormGroup;
    pet: Pet;
    

    constructor(
        private formBuilder: FormBuilder,
        private petService: PetService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.pet = this.activatedRoute.snapshot.data["pet"];
        this.formGroup = this.formBuilder.group({
            id: [this.pet && this.pet.id ? this.pet.id : null],
            nome: [this.pet && this.pet.nome ? this.pet.nome : "", Validators.required],
        });
    }

    salvar() {
        if (this.pet && this.pet.id) {
            if(this.formGroup){
            this.petService.atualizar(this.formGroup.value).subscribe(
                (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", undefined, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/pet");
                },
                (error) => {
                    this.matSnackBar.open("Erro ao atualizar", undefined, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        }
        } else {
            if(this.formGroup){
            this.petService.cadastrar(this.formGroup.value).subscribe(
                (itemCadastrado) => {
                    this.matSnackBar.open("Cadastrado com sucesso!", undefined, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/pet");
                },
                (error) => {
                    this.matSnackBar.open("Erro ao cadastrar", undefined, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        }
    }
    }

    deletar() {
        const dialogoReferencia = this.matDialog.open(DialogoConfirmacaoComponent);

        dialogoReferencia.afterClosed().subscribe((valorResposta) => {
            if (valorResposta) {
                if(this.pet){
                this.petService.deletar(this.pet).subscribe(
                    (response) => {
                        this.matSnackBar.open("pet deletado com sucesso!", undefined, {
                            duration: 5000,
                            panelClass: "green-snackbar",
                        });
                        this.router.navigateByUrl("/pet");
                    },
                    (error) => {
                        this.matSnackBar.open("Erro ao deletar", undefined, {
                            duration: 5000,
                            panelClass: "red-snackbar",
                        });
                    }
                );
            }
        }
        });
    }
}
