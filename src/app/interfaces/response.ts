import { IPeople } from './people';

export interface IResponse {
  limit: number;
  pessoa:  IPeople[];
  skip: number;
  total: number;
}
