interface PK {
  id: number;
}

export interface Category extends PK {
  DescricaoRaca: string;
  ImagemRaca: string;
  NomeRaca: string;
  PrecoMedio: string;
}

export interface Offer extends PK {
  NomeAnimal: string;
  DescricaoAnimal: string;
  ImagemAnimal: string;
  Preco: number;
  Peso: number;
  Localizacao: string;
  DataNascimento: string;
  Categoria: Category;
}
