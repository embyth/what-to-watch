import MockAdapter from "axios-mock-adapter";

import {createAPI} from "../../api";
import {createMovie} from "../../adapters";

import {initialState, ActionType, Operations, reducer} from "./data";
import {ActionType as AppActionType} from "../app/app";

import {moviesMock, movieItemMock, reviewsMock, noop, serverMovie} from "../../helpers/test-data";
import {RequestStatus} from "../../helpers/const";

const api = createAPI(noop);

describe(`Data State Reducer test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update moviePromo by load`, () => {
    expect(reducer({
      moviePromo: {},
    }, {
      type: ActionType.LOAD_MOVIE_PROMO,
      payload: movieItemMock,
    })).toEqual({
      moviePromo: movieItemMock,
    });
  });

  it(`Reducer should update movies by load`, () => {
    expect(reducer({
      movies: [],
    }, {
      type: ActionType.LOAD_MOVIES,
      payload: moviesMock,
    })).toEqual({
      movies: moviesMock,
    });
  });

  it(`Reducer should update movieReviews by load`, () => {
    expect(reducer({
      movieReviews: [],
    }, {
      type: ActionType.LOAD_MOVIE_REVIEWS,
      payload: reviewsMock,
    })).toEqual({
      movieReviews: reviewsMock,
    });
  });

  it(`Reducer should update favoriteMovies by load`, () => {
    expect(reducer({
      favoriteMovies: [],
    }, {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: moviesMock,
    })).toEqual({
      favoriteMovies: moviesMock,
    });
  });

  it(`Reducer should update isLoadError state on api load error`, () => {
    expect(reducer({
      isLoadError: false,
    }, {
      type: ActionType.CATCH_LOAD_ERROR,
      payload: true,
    })).toEqual({
      isLoadError: true,
    });
  });

  it(`Reducer should update isLoading state`, () => {
    expect(reducer({
      isLoading: true,
    }, {
      type: ActionType.FINISH_LOADING,
      payload: false,
    })).toEqual({
      isLoading: false,
    });
  });

  it(`Reducer should set right review request status`, () => {
    expect(reducer({
      reviewRequestStatus: RequestStatus.NOT_SENT,
    }, {
      type: ActionType.SET_REVIEW_REQUEST_STATUS,
      payload: RequestStatus.SENDING,
    })).toEqual({
      reviewRequestStatus: RequestStatus.SENDING,
    });

    expect(reducer({
      reviewRequestStatus: RequestStatus.SENDING,
    }, {
      type: ActionType.SET_REVIEW_REQUEST_STATUS,
      payload: RequestStatus.SUCCESS,
    })).toEqual({
      reviewRequestStatus: RequestStatus.SUCCESS,
    });

    expect(reducer({
      reviewRequestStatus: RequestStatus.SENDING,
    }, {
      type: ActionType.SET_REVIEW_REQUEST_STATUS,
      payload: RequestStatus.ERROR,
    })).toEqual({
      reviewRequestStatus: RequestStatus.ERROR,
    });

    expect(reducer({
      reviewRequestStatus: RequestStatus.ERROR,
    }, {
      type: ActionType.SET_REVIEW_REQUEST_STATUS,
      payload: RequestStatus.NOT_SENT,
    })).toEqual({
      reviewRequestStatus: RequestStatus.NOT_SENT,
    });
  });

  it(`Reducer should set right favorite movies request status`, () => {
    expect(reducer({
      favoriteRequestStatus: RequestStatus.NOT_SENT,
    }, {
      type: ActionType.SET_FAVORITE_REQUEST_STATUS,
      payload: RequestStatus.SENDING,
    })).toEqual({
      favoriteRequestStatus: RequestStatus.SENDING,
    });

    expect(reducer({
      favoriteRequestStatus: RequestStatus.SENDING,
    }, {
      type: ActionType.SET_FAVORITE_REQUEST_STATUS,
      payload: RequestStatus.SUCCESS,
    })).toEqual({
      favoriteRequestStatus: RequestStatus.SUCCESS,
    });

    expect(reducer({
      favoriteRequestStatus: RequestStatus.SENDING,
    }, {
      type: ActionType.SET_FAVORITE_REQUEST_STATUS,
      payload: RequestStatus.ERROR,
    })).toEqual({
      favoriteRequestStatus: RequestStatus.ERROR,
    });

    expect(reducer({
      favoriteRequestStatus: RequestStatus.ERROR,
    }, {
      type: ActionType.SET_FAVORITE_REQUEST_STATUS,
      payload: RequestStatus.NOT_SENT,
    })).toEqual({
      favoriteRequestStatus: RequestStatus.NOT_SENT,
    });
  });
});

describe(`Operations work correctly`, () => {
  const apiMock = new MockAdapter(api);

  it(`Should make a correct API call to /films/promo`, () => {
    const moviePromoLoader = Operations.loadMoviePromo();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, serverMovie);

    return moviePromoLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE_PROMO,
          payload: createMovie(serverMovie),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: AppActionType.SET_CURRENT_MOVIE,
          payload: createMovie(serverMovie),
        });
      });
  });

  it(`Should make a correct API call to /films`, () => {
    const moviesLoader = Operations.loadMovies();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/films`)
      .reply(200, [serverMovie]);

    return moviesLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [createMovie(serverMovie)],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FINISH_LOADING,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to /comments/id`, () => {
    const commentsLoader = Operations.loadMovieReviews(2);
    const dispatch = jest.fn();

    apiMock
      .onGet(`/comments/2`)
      .reply(200, reviewsMock);

    return commentsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE_REVIEWS,
          payload: reviewsMock,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const favoriteMoviesLoader = Operations.loadFavoriteMovies();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [serverMovie]);

    return favoriteMoviesLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_MOVIES,
          payload: [createMovie(serverMovie)],
        });
      });
  });

  it(`Should make a correct API post request to /favorite/id/ADD`, () => {
    const sendReview = Operations.changeIsMovieFavorite(1, true);
    const dispatch = jest.fn();

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, [movieItemMock]);

    return sendReview(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_REQUEST_STATUS,
          payload: RequestStatus.SENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FAVORITE_REQUEST_STATUS,
          payload: RequestStatus.SUCCESS,
        });
      });
  });

  it(`Should make a correct API post request to /favorite/id/REMOVE`, () => {
    const sendReview = Operations.changeIsMovieFavorite(1, false);
    const dispatch = jest.fn();

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, [movieItemMock]);

    return sendReview(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_REQUEST_STATUS,
          payload: RequestStatus.SENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FAVORITE_REQUEST_STATUS,
          payload: RequestStatus.SUCCESS,
        });
      });
  });

  it(`Should make a correct API post request to /comments/1`, () => {
    const reviewData = {
      rating: 10,
      comment: `fake`,
    };
    const sendReview = Operations.sendReview(1, reviewData);
    const dispatch = jest.fn();

    apiMock
      .onPost(`/comments/1`, reviewData)
      .reply(200, [reviewData]);

    return sendReview(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEW_REQUEST_STATUS,
          payload: RequestStatus.SENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_REVIEW_REQUEST_STATUS,
          payload: RequestStatus.SUCCESS,
        });
      });
  });
});
