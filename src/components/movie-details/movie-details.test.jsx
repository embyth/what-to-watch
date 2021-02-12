import React from "react";
import renderer from "react-test-renderer";

import MovieDetails from "./movie-details";
import {movieItemMock} from "../../helpers/test-data";

it(`MovieDetails should render correctly`, () => {
  const tree = renderer
    .create(<MovieDetails
      movie={movieItemMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
