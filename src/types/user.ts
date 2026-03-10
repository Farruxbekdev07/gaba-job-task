export interface User {
  id: number;
  age: number;
  image: string;
  email: string;
  phone: string;
  lastName: string;
  firstName: string;
  birthDate: string;
  university: string;
  company: {
    name: string;
    title: string;
    country: string;
    department: string;
  };
  address: {
    state: string;
    country: string;
  };
}

export interface UserResponse {
  skip: number;
  users: User[];
  total: number;
  limit: number;
}
