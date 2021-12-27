import { all } from 'redux-saga/effects';
import { nodesWatcher } from '../components/sideBar/store/saga'
import { articlesWatcher } from '../components/article/store/saga'

export default function* rootSaga() {
  yield all([
    nodesWatcher(),
    articlesWatcher()
  ])
}