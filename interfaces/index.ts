export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}


export type PillProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};


export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  description: string;
  image: string;
  images: string[];
  rating: number;
  address: Address;
  category: string[];
  price: number;
  reviews: ReviewProps[];
}

