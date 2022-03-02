require('dotenv').config()
const ImageKit = require('imagekit')
const fs = require('fs')

const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/imagekit-token', (req, res) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: 'https://ik.imagekit.io/your_imagekit_id/',
  })

  const authenticationParameters = imagekit.getAuthenticationParameters()
  res.status(200).json(authenticationParameters)
})

app.listen(9000, () => {
  console.log('listening 9000')
})
