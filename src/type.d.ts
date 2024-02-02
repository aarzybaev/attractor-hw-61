export interface Countries {
  name: string;
  alpha3Code: string;
}

export interface Country {
  name: string;
  alpha3Code: string;
  capital: string;
  population: number;
  borders: string[];
  flag: string;
  region?: string;
}