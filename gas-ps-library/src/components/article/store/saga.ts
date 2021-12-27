import { all, call, put, takeEvery } from 'redux-saga/effects'
import {
  Article,
  deleteArticle,
  setArticle,
  setArticles,
  setIsArticleLoading, updateArticle
} from './slice'
import { ArticleApi } from '../../../api/articleApi'
import { createAction, PayloadAction } from '@reduxjs/toolkit'

export const fetchArticlesAction = createAction('articles/fetch')
export const fetchArticleAction = createAction<number>('article/fetch')
export const deleteArticleAction = createAction<number>('article/delete')
export const updateArticleAction = createAction<Article>('article/update')

export function* fetchArticlesWorker() {
  try {
    yield put(setIsArticleLoading(true))
    const articles: Article[] = yield call(ArticleApi.getAll)
    let articlesMap: { [key: number]: Article } = {}
    for (let article of articles) {
      articlesMap[article.id] = article
    }
    yield put(setArticles(articlesMap))
    yield put(setIsArticleLoading(false))
  } catch (e) {
    console.log(e)
  }
}

export function* fetchArticleWorker({ payload }: PayloadAction<number>) {
  try {
    yield put(setIsArticleLoading(true))
    const article: Article = yield call(ArticleApi.getById, payload)
    yield put(setArticle(article))
    yield put(setIsArticleLoading(false))
  } catch (e) {
    console.log(e)
  }
}

export function* deleteArticleWorker({ payload }: PayloadAction<number>) {
  try {
    yield put(deleteArticle(payload))
    yield call(ArticleApi.delete, payload)
  } catch (e) {
    console.log(e)
  }
}

export function* updateArticleWorker({ payload }: PayloadAction<Article>) {
  try {
    yield put(updateArticle(payload))
    yield call(ArticleApi.update, payload)
  } catch (e) {
    console.log(e)
  }
}

export function* articlesWatcher() {
  yield all([
    takeEvery(fetchArticlesAction, fetchArticlesWorker),
    takeEvery(fetchArticleAction, fetchArticleWorker),
    takeEvery(deleteArticleAction, deleteArticleWorker),
    takeEvery(updateArticleAction, updateArticleWorker),
  ])
}