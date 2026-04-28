import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private contatos = [
    { id: 1, nome: 'João Silva', telefone: '(11) 99999-1111', email: 'joao@email.com' },
    { id: 2, nome: 'Maria Souza', telefone: '(11) 99999-2222', email: 'maria@email.com' },
  ];

  getContatos() {
    return this.contatos;
  }

  adicionarContato(contato: { nome: string; telefone: string; email: string }) {
    this.contatos.push({
      id: this.contatos.length + 1,
      ...contato
    });
  }

  deletarContato(id: number) {
    this.contatos = this.contatos.filter(c => c.id !== id);
  }

  editarContato(contatoEditado: { id: number; nome: string; telefone: string; email: string }) {
    const index = this.contatos.findIndex(c => c.id === contatoEditado.id);
    this.contatos[index] = { ...contatoEditado };
  }

}