require('dotenv').config()
const ImageKit = require('imagekit')
const fs = require('fs')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.get('/imagekit-token', (req, res) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: 'https://ik.imagekit.io/your_imagekit_id/',
  })

  const authenticationParameters = imagekit.getAuthenticationParameters()
  res.status(200).json(authenticationParameters)
})

app.listen(process.env.PORT || 9000, () => {
  console.log('listening 9000')
})
