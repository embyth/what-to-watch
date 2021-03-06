import {MovieInterface, ReviewInterface, ServerMovie, UserInterface, ServerUser} from "./types";

export const noop = () => {
  // Mock function for test props
};

export const genres: Array<string> = [`All genres`, `Drama`, `Thriller`, `Comedy`];

export const serverMovie: ServerMovie = {
  [`name`]: `Snatch`,
  [`genre`]: `Crime`,
  [`released`]: 2000,
  [`background_color`]: `#FFFFFF`,
  [`background_image`]: `https://placeimg.com/1300/512/nature`,
  [`preview_image`]: `img/snatch.jpg`,
  [`poster_image`]: `img/snatch.jpg`,
  [`id`]: 123890,
  [`description`]: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
  [`rating`]: 8.3,
  [`scores_count`]: 1500,
  [`director`]: `Guy Ritchie`,
  [`starring`]: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
  [`run_time`]: 164,
  [`preview_video_link`]: `https://upload.wikimedia.org/wikipedia/commons/d/d0/Un_Hiver_%C3%A0_Paris_-_Vimeo.webm`,
  [`video_link`]: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  [`is_favorite`]: false,
};

export const movieItemMock: MovieInterface = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#eeeeee`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  id: 190123,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege`,
  rating: 8.9,
  votes: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
  previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
  runTime: 99,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
  isFavorite: false,
};

export const moviesMock: Array<MovieInterface> = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Kids & Family`,
    date: 2018,
    background: `https://placeimg.com/1300/512/nature`,
    backgroundColor: `#eeeeee`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    id: 189234,
    description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
    rating: 6.6,
    votes: 500,
    director: `David Yates`,
    starring: [`Johnny Depp`, `Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: 133,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,
  },
  {
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    date: 2018,
    background: `https://placeimg.com/1300/512/nature`,
    backgroundColor: `#eeeeee`,
    poster: `img/bohemian-rhapsody.jpg`,
    id: 178345,
    description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`,
    rating: 8.0,
    votes: 800,
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/f/fa/Tornado_time_lapse.webm`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: 134,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/f/fa/Tornado_time_lapse.webm`,
    isFavorite: false,
  },
  {
    title: `Aviator`,
    genre: `Drama`,
    date: 2004,
    background: `https://placeimg.com/1300/512/nature`,
    backgroundColor: `#eeeeee`,
    poster: `img/aviator.jpg`,
    id: 167456,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: 7.5,
    votes: 1650,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/9/9b/St._Lambertus_%28Immerather_Dom%29_2016.webm`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: 170,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/9/9b/St._Lambertus_%28Immerather_Dom%29_2016.webm`,
    isFavorite: false,
  },
  {
    title: `Shutter Island`,
    genre: `Thriller`,
    date: 2010,
    background: `https://placeimg.com/1300/512/nature`,
    backgroundColor: `#eeeeee`,
    poster: `img/shutter-island.jpg`,
    id: 156567,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
    rating: 8.1,
    votes: 900,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/4/4d/Baha%27i_Temple_--_Wilmette_%2C_IL_--_Drone_Video_%28DJI_Spark%29.webm`,
    previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
    runTime: 139,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/4/4d/Baha%27i_Temple_--_Wilmette_%2C_IL_--_Drone_Video_%28DJI_Spark%29.webm`,
    isFavorite: false,
  },
];

export const reviewItemMock: ReviewInterface = {
  user: {
    id: 0,
    name: `Kate Muir`,
  },
  rating: 8.9,
  date: `2019-05-08T14:13:56.569Z`,
  comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  id: 345234523,
};

export const reviewsMock: Array<ReviewInterface> = [
  {
    user: {
      id: 0,
      name: `Kate Muir`,
    },
    rating: 8.9,
    date: `2019-05-08T14:13:56.569Z`,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    id: 345234523,
  },
  {
    user: {
      id: 1,
      name: `Max Miller`,
    },
    rating: 4.6,
    date: `2020-03-04T14:24:56.569Z`,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    id: 345255523,
  },
  {
    user: {
      id: 0,
      name: `John Feller`,
    },
    rating: 6.8,
    date: `2020-09-18T11:33:56.569Z`,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    id: 115234523,
  },
];

export const serverUser: ServerUser = {
  id: 1337,
  email: `test@mail.com`,
  name: `Fake`,
  [`avatar_url`]: `https://avatar-base.com/1337`,
};

export const userMock: UserInterface = {
  id: 1337,
  email: `test@mail.com`,
  name: `Fake`,
  avatarSrc: `https://avatar-base.com/1337`,
};
