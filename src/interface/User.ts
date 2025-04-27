export interface Book {
    id: number;
    name: string;
    author: string;
    publisher: string;
    library: number;
    quantity_in_library: number;
  }
  
  export interface Library {
    id: number;
    address: string;
    image: string | null;
    can_rent_books: boolean;
    google_maps_url: string;
    total_books: number;
    phone: string;
    latitude: string;
    longitude: string;
    social_media: {
      telegram?: string;
    };
    user: number;
  }
  
  export interface LibraryDetailResponse {
    count: number;
    next: string | null;
    previous: string | null;
    total_books:number
    results: {
      total_books:number
      books: Book[];
      library: Library;
      is_active: boolean;
    };
  }
  
  
  export interface User {
    id: number | null;
    name: string | null;
    address: string | null; 
    user: number | null;
    can_rent_books: boolean | null;
    total_books: number | null;
    SetStatusOfUser: boolean |null
    library: Library | null;
    books: Book[] | null;
  }
  