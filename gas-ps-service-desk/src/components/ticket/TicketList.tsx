import React from 'react'
import {
  Datagrid,
  EmailField,
  TextField,
  List,
  BooleanField, DateField,
  TextInput,
  SelectInput
} from 'react-admin'

const ticketFilters = [
  <TextInput source="title" label="Search" alwaysOn />,
  <TextInput source="email" label="Email" />,
  <SelectInput source='isOpen' choices={[
    { id: true, name: 'True' },
    { id: false, name: 'False' }
  ]}/>
]

const TicketList = (props: any) => {
  return (
    <List filters={ticketFilters} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <EmailField source="email" />
        <BooleanField source='isOpen' />
        <DateField source='createdAt' />
      </Datagrid>
    </List>
  )
}

export default TicketList