import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'

export interface Article {
  id: number;
  title: string;
  content?: string | null;
  chapterId?: number | null;
}

export interface ArticlesState {
  articles: {
    [key: number]: Article
  }
  isArticleLoading: boolean;
}

const initialState: ArticlesState = {
  articles: {},
  isArticleLoading: false
}

export const articleSelector = (id?: string) => (state: RootState) => {
  if (id) {
    return { article: state.articlesReducer.articles[Number(id)], isArticleLoading: state.articlesReducer.isArticleLoading }
  }
  return { article: undefined, isArticleLoading: state.articlesReducer.isArticleLoading };
}

export const articleSlice = createSlice({
  name: 'articlesState',
  initialState,
  reducers: {
    setArticles(
      state: ArticlesState,
      { payload: articles }: PayloadAction<ArticlesState['articles']>
    ) {
      state.articles = articles
    },
    setArticle(
      state: ArticlesState,
      { payload: article }: PayloadAction<Article>
    ) {
      state.articles[article.id] = article
    },
    deleteArticle(
      state: ArticlesState,
      { payload: id }: PayloadAction<number>
    ) {
      delete state.articles[id]
    },
    updateArticle(
      state: ArticlesState,
      { payload: article }: PayloadAction<Article>
    ) {
      state.articles[article.id] = article
    },
    setIsArticleLoading(
      state: ArticlesState,
      { payload: isArticleLoading }: PayloadAction<boolean>
    ) {
      state.isArticleLoading = isArticleLoading
    }
  }
})

export const {
  setArticle,
  setArticles,
  setIsArticleLoading,
  updateArticle,
  deleteArticle
} = articleSlice.actions

export const articlesReducer = articleSlice.reducer