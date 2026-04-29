import { Injectable } from '@angular/core';
import { Contato, NovoContato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private proximoId = 3;

  private contatos: Contato[] = [
    {
      id: 1,
      nome: 'João Silva',
      telefone: '(11) 99999-1111',
      email: 'joao@email.com'
    },
    {
      id: 2,
      nome: 'Maria Souza',
      telefone: '(11) 99999-2222',
      email: 'maria@email.com'
    }
  ];

  getContatos(): Contato[] {
    return this.contatos;
  }

  adicionarContato(contato: NovoContato): void {
    const novoContato: Contato = {
      id: this.proximoId,
      ...contato
    };

    this.contatos.push(novoContato);
    this.proximoId++;
  }

  deletarContato(id: number): void {
    this.contatos = this.contatos.filter(contato => contato.id !== id);
  }

  editarContato(contatoEditado: Contato): void {
    const index = this.contatos.findIndex(contato => contato.id === contatoEditado.id);

    if (index === -1) {
      return;
    }

    this.contatos[index] = { ...contatoEditado };
  }
}