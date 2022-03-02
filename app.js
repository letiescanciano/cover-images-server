const ImageKit = require('imagekit')
const fs = require('fs')

const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/imagekit-token', () => {
  const imagekit = new ImageKit({
    publicKey: 'your_public_api_key',
    privateKey: 'your_private_api_key',
    urlEndpoint: 'https://ik.imagekit.io/your_imagekit_id/',
  })

  const authenticationParameters = imagekit.getAuthenticationParameters()
  console.log(authenticationParameters)
  res.status(200).json(authenticationParameters)
})

app.listen(9000, () => {
  console.log('listening 9000')
})
