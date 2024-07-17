export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  id: number;
  email: string;
  phone: string;
  name: Name;
  address: Address;
}
export interface UserCardProps {
  user: User;
}
