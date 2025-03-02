import { IPeople } from './people';

export interface IResponse {
  limit: number;
  products: IPeople[];
  skip: number;
  total: number;
}
