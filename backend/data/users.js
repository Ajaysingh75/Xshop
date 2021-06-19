import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ajay Singh',
    email: 'Ajay@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Raj Bisht',
    email: 'Raj@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
