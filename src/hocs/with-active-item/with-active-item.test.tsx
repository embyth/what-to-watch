import * as React from "react";
import * as renderer from "react-test-renderer";

import withActiveItem from "./with-active-item";
import {movieItemMock} from "../../helpers/test-data";

const MockComponent = () => {
  return (
    <div></div>
  );
};

it(`withActiveItem is rendered correctly`, () => {
  const MockComponentWrapped = withActiveItem(MockComponent);

  const tree = renderer
    .create(
        <MockComponentWrapped
          currentMovie={movieItemMock}
          defaultActiveItem={`Overview`}
        />, {
          createNodeMock() {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
