import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import SideBar from './sideBar/SideBar'
import Wrapper from './wrapper/Wrapper'
import HomePage from './homePage/homePage'
import Article from './article/Article'

const AppProvider: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {children}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

const Layout: FC = ({ children }) => {

  return (
    <>
      <SideBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  )
}

const App = () => {
  return (
    <AppProvider>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='article/:id' element={<Article />} />
        <Route path='*' element={<HomePage />} />
      </Route>
    </AppProvider>
  )
}

export default App