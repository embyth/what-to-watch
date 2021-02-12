import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MainPage from "./main-page";

import {movieItemMock, moviesMock, genres} from "../../helpers/test-data";
import {ALL_GENRES} from "../../helpers/const";

const mockStore = configureStore([]);

it(`Should MainPage render correctly`, () => {
  const store = mockStore({
    currentMovie: movieItemMock,
    movies: moviesMock,
    currentGenre: ALL_GENRES,
    moviesByGenre: moviesMock,
    genres,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MainPage
            isMainPage={true}
            onMovieCardClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
