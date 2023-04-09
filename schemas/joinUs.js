// schemas/pet.js
export default {
    name: 'join',
    type: 'document',
      title: 'Join',
    fields: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name'
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name'
      },
      {
        name: 'stateOfOrigin',
        type: 'string',
        title: 'State Of Origin'
      },
      {
        name: 'gender',
        type: 'string',
        title: 'Gender'
      },
      {
        name: 'dob',
        type: 'string',
        title: 'DOB'
      },
      {
        name: 'phoneNumber',
        type: 'number',
        title: 'Phone Number'
      },
      {
        name: 'acaQua',
        type: 'string',
        title: 'Academic Qualification'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email Address'
      },
      {
        name: 'codeExp',
        type: 'string',
        title: 'Coding Experience'
      },
      {
        name: 'dyk',
        type: 'string',
        title: 'Do You Know'
      },
    ]
  }