import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";

import {PageHeader} from "./page-header";

import {userMock} from "../../helpers/test-data";
import {emptyUser, Pages} from "../../helpers/const";

describe(`PageHeader tests`, () => {
  it(`Should render correctly on main page`, () => {
    const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            isAuth={false}
            userInfo={emptyUser}
            currentPage={Pages.MAIN}
          />
        </Router>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly on main page with user signed in`, () => {
    const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            isAuth={true}
            userInfo={userMock}
            currentPage={Pages.SIGN_IN}
          />
        </Router>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly on movie page`, () => {
    const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            isAuth={true}
            userInfo={userMock}
            currentPage={Pages.MOVIE}
          />
        </Router>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly on my list page`, () => {
    const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            isAuth={true}
            userInfo={userMock}
            currentPage={Pages.MY_LIST}
          />
        </Router>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly on signin page`, () => {
    const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            isAuth={false}
            userInfo={emptyUser}
            currentPage={Pages.SIGN_IN}
          />
        </Router>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly on add review page`, () => {
    const tree = renderer
    .create(
        <Router history={history}>
          <PageHeader
            isAuth={true}
            userInfo={userMock}
            currentPage={Pages.ADD_REVIEW}
          >
            <div>Breadcrumbs</div>
          </PageHeader>
        </Router>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

