export const name_validation = {
  name: 'username',
  // label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Write your name ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
    pattern: {
      value: /^[A-Za-z\s]+$/, // Allow only letters and spaces
      message: 'Name must not contain symbols or numbers',
    },
    transform: value => value.trim(),
  },
}

export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'Write description ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
    minLength: {
      value: 30,
      message: 'Min 30 characters',
    },
  },
}


export const quantity_validation = {
  name: 'quantity',
  label: 'quantity',
  type: 'text',
  id: 'quantity',
  placeholder: 'Write quantity ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 5,
      message: '5 characters max',
    },
    pattern: {
      value: /^[0-9]+$/,
      message: 'Only numbers are allowed',
    },
  },
}

export const price_validation = {
  name: 'price',
  label: 'price',
  type: 'text',
  id: 'price',
  // placeholder: 'Write quantity ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 7,
      message: '7 characters max',
    },
    pattern: {
      value: /^[0-9]+$/,
      message: 'Only numbers are allowed',
    },
  },
}

export const title_validation = {
  name: 'title',
  label: 'title',
  type: 'text',
  id: 'title',
  placeholder: 'Write title ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  // label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'Type password ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    minLength: {
      value: 6,
      message: 'Min 6 characters',
    },
    //   transform: value => value.trim(),
  },
}

export const email_validation = {
  name: 'email',
  // label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'Write your email address',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Not valid email',
    },
    transform: value => value.trim(),
  },
}

//   export const num_validation = {
//     name: 'num',
//     label: 'number',
//     type: 'number',
//     id: 'num',
//     placeholder: 'write a random number',
//     validation: {
//       required: {
//         value: true,
//         message: 'required',
//       },
//     },
//   }

// export const category_validation = {
//   name: 'category',
//   label: 'category',
//   select: true,
//   id: 'category',
//   placeholder: '',
//   validation: {
//     required: {
//       value: true,
//       message: 'required',
//     },
//   },
// }

// export const image_validation = {
//   name: 'image',
//   label: 'image',
//   multiline: true,
//   id: 'image',
//   placeholder: '',
//   validation: {
//     required: {
//       value: true,
//       message: 'required',
//     },
//     maxLength: {
//       value: 200,
//       message: '200 characters max',
//     },
//   },
// }