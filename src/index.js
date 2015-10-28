import React from 'react'
import ReactDOM from 'react-dom'
import { gifs } from './data'
import App from './App'

const dest = document.getElementById('app')

ReactDOM.render(<App gifs={gifs} />, dest)
