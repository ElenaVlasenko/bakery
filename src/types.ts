export type Product = ProductListItem & {
  description: string;
  images: string[];
  weight: number;
  rating: number;
  reviewCount: number;
}

export type ProductListItem = {
  id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type Category = {
  category: string;
  types: string[];
}

export type Review = {
  id: string;
  isoDate: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  positive: string;
  negative: string;
  rating: number;
}

export type UserReview = {
  positive: string;
  negative: string;
  rating: number;
}

export type User = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
};

export type SignUpParams = AuthParams & {
  name: string;
};
export type AuthParams = {
  email: string;
  password: string;
};

