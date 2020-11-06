import jwt from 'jsonwebtoken'
import dotEnv from 'dotenv'

dotEnv.config()

export const generateToken = (id, adminName) => {
  const expiration = process.env.NODE_ENV === 'development' ? 100 : 604800000
  return jwt.sign({ id, name: adminName }, process.env.JWT_SECRET, {
    expiresIn: process.env.NODE_ENV === 'development' ? '1d' : '7d',
  })

  // return cookies
  //   return res.cookie('token', token, {
  //     expires: new Date(Date.now() + expiration),
  //     secure: false, // set to true if your using https
  //     httpOnly: true,
  //   });
}
