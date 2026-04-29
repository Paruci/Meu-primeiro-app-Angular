import { Injectable } from '@angular/core';
import { Contato, NovoContato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private readonly chaveStorage = 'contatos';

  private contatos: Contato[] = [];

  constructor() {
    this.carregarContatos();
  }

  getContatos(): Contato[] {
    return this.contatos;
  }

  adicionarContato(contato: NovoContato): void {
    const novoContato: Contato = {
      id: this.gerarProximoId(),
      ...contato
    };

    this.contatos.push(novoContato);
    this.salvarContatos();
  }

  deletarContato(id: number): void {
    this.contatos = this.contatos.filter(contato => contato.id !== id);
    this.salvarContatos();
  }

  editarContato(contatoEditado: Contato): void {
    const index = this.contatos.findIndex(contato => contato.id === contatoEditado.id);

    if (index === -1) {
      return;
    }

    this.contatos[index] = { ...contatoEditado };
    this.salvarContatos();
  }

  private salvarContatos(): void {
    localStorage.setItem(this.chaveStorage, JSON.stringify(this.contatos));
  }

  private carregarContatos(): void {
    const contatosSalvos = localStorage.getItem(this.chaveStorage);

    if (contatosSalvos) {
      this.contatos = JSON.parse(contatosSalvos);
      return;
    }

    this.contatos = [
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

    this.salvarContatos();
  }

  private gerarProximoId(): number {
    if (this.contatos.length === 0) {
      return 1;
    }

    const ids = this.contatos.map(contato => contato.id);
    const maiorId = Math.max(...ids);

    return maiorId + 1;
  }
}