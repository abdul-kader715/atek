import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/fontawesome.min.css'
import '../src/css/swiper-bundle.min.css'
import '../src/sass/style.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
