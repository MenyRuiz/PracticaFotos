export interface Task {
    userId: string;
    id?: string;
    title: string;
    completed: boolean;
  }

export interface Users {
      id: string;
      name: string;
      username: string;
      email: string;
      adress: string;
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: string;
      lat: string;
      lng: string;
      phone: string;
      website: string;
      company: string;
      namec: string;
      catchPhrase: string;
      bs: string;
  }
