import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router, // Objeto para redirecionamento.
  ) {}

  login() {
    this.authService.autenticar(this.usuario, this.senha)
      .subscribe(() => {
        this.router.navigate(['animais']); // Vai pra rota animais.
      }, (error) => {
        alert('Usuário ou senha inválido.');
        console.log(error);
      });
  }
}
