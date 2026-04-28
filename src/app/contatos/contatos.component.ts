import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  
  contatos = [
    { id: 1, nome: 'João Silva', telefone: '(11) 99999-1111', email: 'joao@email.com' },
    { id: 2, nome: 'Maria Souza', telefone: '(11) 99999-2222', email: 'maria@email.com' },
  ];

}