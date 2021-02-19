import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";
import thunk from "redux-thunk";

import MyList from "./my-list";

import NameSpace from "../../store/name-space";
import {moviesMock, userMock} from "../../helpers/test-data";
import {AuthorizationStatus} from "../../helpers/const";

const mockStore = configureStore([thunk]);

it(`MyList should render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      favoriteMovies: moviesMock,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: userMock,
    },
  });

  store.dispatch = jest.fn();

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <MyList loadFavoriteMovies={() => {}} />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
