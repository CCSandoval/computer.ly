export interface RequestData {
  name: string;
  identification: string;
  message: string;
  email: string;
  age: number;
  celNumber: string;
  senaCenter: string;
  date: string;
  formation?: string;
  status?: string;
}

export interface UserData {
  email: string;
  name: string;
  role: string;
  password: string;
}
