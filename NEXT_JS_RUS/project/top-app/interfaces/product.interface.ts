export interface ProductCharacteristic {
  value: string;
  name: string;
}

export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  description: string;
  link: string;
  image: string;
  characteristics: ProductCharacteristic[];
  initialRating: number;
  credit: number;
  price: number;
  oldPrice: number;
  advantages: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
}
