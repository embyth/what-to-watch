import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MoviePageInfo from "./movie-page-info";
import {movieItemMock, reviewsMock} from "../../helpers/test-data";

const mockStore = configureStore([]);

it(`MoviePageInfo should render correctly`, () => {
  const store = mockStore({
    currentMovie: movieItemMock,
    moviesReviews: reviewsMock,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePageInfo
            currentMovie={movieItemMock}
            currentActiveItem={`Reviews`}
            onItemClick={() => {}}
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