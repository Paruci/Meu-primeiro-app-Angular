import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {

  novoContato = { nome: '', telefone: '', email: '' };

  contatos = [
    { id: 1, nome: 'João Silva', telefone: '(11) 99999-1111', email: 'joao@email.com' },
    { id: 2, nome: 'Maria Souza', telefone: '(11) 99999-2222', email: 'maria@email.com' },
  ];

  adicionarContato() {
    if (!this.novoContato.nome) return;

    this.contatos.push({
      id: this.contatos.length + 1,
      ...this.novoContato
    });

    this.novoContato = { nome: '', telefone: '', email: '' };
  }

}