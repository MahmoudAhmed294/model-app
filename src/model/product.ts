export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
}

export interface IProductDetails extends IProduct {
  code: string;
  type: string;
  cost: number;
  category: string;
  description: string;
}
