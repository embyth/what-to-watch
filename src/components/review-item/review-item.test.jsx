import React from "react";
import renderer from "react-test-renderer";

import ReviewItem from "./review-item";

import {reviewItemMock} from "../../helpers/test-data";

it(`ReviewItem should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem
          review={reviewItemMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
