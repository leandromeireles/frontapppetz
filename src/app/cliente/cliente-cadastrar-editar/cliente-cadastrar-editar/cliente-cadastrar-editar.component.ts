import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ClienteService } from "../../cliente.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Cliente } from "../../cliente.moldel";
import { DialogoConfirmacaoComponent } from "src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: "app-cliente-cadastrar-editar",
    templateUrl: "./cliente-cadastrar-editar.component.html",
})
export class ClienteCadastrarEditarComponent implements OnInit {
    
    formGroup :FormGroup;
    cliente: Cliente;
    

    constructor(
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.cliente = this.activatedRoute.snapshot.data["cliente"];
        this.formGroup = this.formBuilder.group({
            id: [this.cliente && this.cliente.id ? this.cliente.id : null],
            nome: [this.cliente && this.cliente.nome ? this.cliente.nome : "", Validators.required],
        });
    }

    salvar() {
        if (this.cliente && this.cliente.id) {
            if(this.formGroup){
            this.clienteService.atualizar(this.formGroup.value).subscribe(
                (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", undefined, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/cliente");
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
            this.clienteService.cadastrar(this.formGroup.value).subscribe(
                (itemCadastrado) => {
                    this.matSnackBar.open("Cadastrado com sucesso!", undefined, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/cliente");
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
                if(this.cliente){
                this.clienteService.deletar(this.cliente).subscribe(
                    (response) => {
                        this.matSnackBar.open("cliente deletado com sucesso!", undefined, {
                            duration: 5000,
                            panelClass: "green-snackbar",
                        });
                        this.router.navigateByUrl("/cliente");
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
