import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {

  novoContato = { nome: '', telefone: '', email: '' };
  contatoEditando: any = null;
  busca = '';

  constructor(private contatosService: ContatosService) {}

  get contatos() {
    return this.contatosService.getContatos();
  }

  get contatosFiltrados() {
    return this.contatos.filter(c =>
      c.nome.toLowerCase().includes(this.busca.toLowerCase())
    );
  }

  adicionarContato() {
    if (!this.novoContato.nome) return;
    this.contatosService.adicionarContato(this.novoContato);
    this.novoContato = { nome: '', telefone: '', email: '' };
  }

  deletarContato(id: number) {
    this.contatosService.deletarContato(id);
  }

  editarContato(contato: any) {
    this.contatoEditando = { ...contato };
  }

  salvarEdicao() {
    this.contatosService.editarContato(this.contatoEditando);
    this.contatoEditando = null;
  }

  cancelarEdicao() {
    this.contatoEditando = null;
  }

}