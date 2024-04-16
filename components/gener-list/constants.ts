type Ganres = 'Drama' | 'Comedy' | 'Action' | 'Thriller' | 'Science fiction';

type Ganre = {
  icon: string;
  caption: Ganres;
};

export const genreList: Ganre[] = [
  {
    icon: '/images/gener-icons/drama.png',
    caption: 'Drama',
  },
  {
    icon: '/images/gener-icons/comedy.png',
    caption: 'Comedy',
  },
  {
    icon: '/images/gener-icons/action.png',
    caption: 'Action',
  },
  {
    icon: '/images/gener-icons/thriller.png',
    caption: 'Thriller',
  },
  {
    icon: '/images/gener-icons/science.png',
    caption: 'Science fiction',
  },
];
