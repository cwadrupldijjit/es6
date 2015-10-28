import React from 'react'
import ReactDOMserver from 'react-dom/server'
import express from 'express'
import { createPage } from './html'
import { gifs } from './src/data'
import App from './src/App'

const app = express()
const port = process.env.PORT || 3000
app.get('/', (req, res, next) => res.send(
  createPage(ReactDOMserver.renderToString(<App { ...{ gifs } } />))
))

app.listen(port, () => console.log(`listening on port ${port}`))
