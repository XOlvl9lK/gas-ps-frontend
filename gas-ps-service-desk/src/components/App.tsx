import React from 'react'
import { Admin, Resource } from 'react-admin'
import { dataProvider } from '../dataProvider/dataProvider'
import HomePage from './homePage/HomePage'
import TicketList from './ticket/TicketList'
import authProvider from '../authProvider/authProvider'
import TicketCreate from './ticket/TicketCreate'
import TicketEdit from './ticket/TicketEdit'


const App = () => {
  return (
    <Admin dashboard={HomePage} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name='ticket' list={TicketList} create={TicketCreate} edit={TicketEdit}/>
    </Admin>
  )
}

export default App