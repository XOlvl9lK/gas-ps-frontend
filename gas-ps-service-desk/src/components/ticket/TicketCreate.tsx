import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
} from 'react-admin';

const TicketCreate = (props: any) => {
  return (
      <Create {...props}>
        <SimpleForm>
          <TextInput source='title' />
          <TextInput fullWidth multiline source='message' />
          <TextInput source='email' />
          <TextInput source='file' />
        </SimpleForm>
      </Create>
  )
}

export default TicketCreate