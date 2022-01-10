import React from 'react'
import { SimpleForm, TextInput, Edit, DateInput, BooleanInput, ImageField, TextField } from 'react-admin'

const TicketEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextField source='title' />
        <TextField fullWidth source='message' />
        <TextField source='email' />
        <ImageField source='file'/>
        <BooleanInput source='isOpen'/>
        <DateInput source='createdAt'/>
      </SimpleForm>
    </Edit>
  )
}

export default TicketEdit