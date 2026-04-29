import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContatosService } from './contatos.service';
import { Contato, NovoContato } from './contato';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  novoContato: NovoContato = {
    nome: '',
    telefone: '',
    email: ''
  };

  contatoEditando: Contato | null = null;

  busca = '';

  constructor(private contatosService: ContatosService) {}

  get contatos(): Contato[] {
    return this.contatosService.getContatos();
  }

  get contatosFiltrados(): Contato[] {
    return this.contatos.filter(contato =>
      contato.nome.toLowerCase().includes(this.busca.toLowerCase())
    );
  }

  adicionarContato(): void {
    if (!this.novoContato.nome.trim()) {
      return;
    }

    this.contatosService.adicionarContato(this.novoContato);

    this.novoContato = {
      nome: '',
      telefone: '',
      email: ''
    };
  }

  deletarContato(id: number): void {
    this.contatosService.deletarContato(id);
  }

  editarContato(contato: Contato): void {
    this.contatoEditando = { ...contato };
  }

  salvarEdicao(): void {
    if (!this.contatoEditando) {
      return;
    }

    this.contatosService.editarContato(this.contatoEditando);
    this.contatoEditando = null;
  }

  cancelarEdicao(): void {
    this.contatoEditando = null;
  }
}