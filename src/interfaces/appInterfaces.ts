export interface MovieInterface {
  item: {
    id: number;
    original_title: string;
    release_date: string;
    poster_path: string;
  };
}

export interface HomePageInterface {
  id: number;
  name: string;
}

export interface DetailsInterface {
  id: number;
  overview: string;
  original_title: string;
  release_date: string;
  poster_path: string;
}
