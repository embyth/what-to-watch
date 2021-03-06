import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {getAuthorizationStatus, getUserInfo} from "../../store/user/selectors";

import {UserInterface} from "../../helpers/types";
import {Pages, AuthorizationStatus, AppRoute} from "../../helpers/const";

interface PageHeaderProps {
  currentPage: string;
  isAuth: boolean;
  userInfo: UserInterface;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  currentPage, isAuth, userInfo, children
}: PageHeaderProps) => {
  const isSignInPage = currentPage === Pages.SIGN_IN;
  const isMyListPage = currentPage === Pages.MY_LIST;
  const isReviewPage = currentPage === Pages.ADD_REVIEW;
  const isHeaderWithTitle = isSignInPage || isMyListPage;

  const pageTitleElement = (
    <h1 className="page-title user-page__title">
      {isMyListPage && `My list`}
      {isSignInPage && `Sign in`}
    </h1>
  );

  const userBlockElement = (
    <div className="user-block">
      {isAuth
        ? <Link to={AppRoute.MY_LIST}>
          <div className="user-block__avatar">
            <img src={userInfo.avatarSrc} alt={userInfo.name} width="63" height="63" />
          </div>
        </Link>
        : <Link to={AppRoute.SIGN_IN} className="user-block__link">Sign in</Link>
      }
    </div>
  );

  return (
    <header className={`page-header ${isHeaderWithTitle ? `user-page__head` : `movie-card__head`}`}>
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {isReviewPage && children}
      {isHeaderWithTitle && pageTitleElement}
      {!isSignInPage && userBlockElement}

    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  userInfo: getUserInfo(state),
});

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
