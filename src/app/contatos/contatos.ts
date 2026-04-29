export interface Contato {
    id: number;
    nome: string;
    telefone: string;
    email: string;
  }
  
  export type NovoContato = Omit<Contato, 'id'>;