import React from "react";
import renderer from "react-test-renderer";

import MovieOverview from "./movie-overview";
import {movieItemMock} from "../../utils/test-data";

it(`MovieOverview should render correctly`, () => {
  const tree = renderer
    .create(<MovieOverview
      movie={movieItemMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
