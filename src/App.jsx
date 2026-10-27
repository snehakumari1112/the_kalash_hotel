import { lazy, Suspense } from 'react'
import Home from './pages/Home'

// Page modules load only when their route is opened, so new pages can be
// implemented independently as they are ready.
const Rooms = lazy(() => import('./pages/Rooms'))
const Restaurant = lazy(() => import('./pages/Restaurant'))
const Banquet = lazy(() => import('./pages/Banquet'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

const routes = {
  '/rooms': Rooms,
  '/restaurant': Restaurant,
  '/banquet': Banquet,
  '/gallery': Gallery,
  '/about': About,
  '/contact': Contact,
}

export default function App() {
  const Page = routes[window.location.pathname]

  if (!Page) return <Home />

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}
