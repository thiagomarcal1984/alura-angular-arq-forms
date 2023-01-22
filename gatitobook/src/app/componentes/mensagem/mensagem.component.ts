import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {
  @Input() // O HTML do componente pai vai definir o valor para mensagem.
  mensagem = '';
}
