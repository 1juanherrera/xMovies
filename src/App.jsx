import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Catalog, Detail } from './pages'
import { Footer, Header } from './components'


export const App = () => {

    return (
      <HashRouter>
        <Header />
      <Routes>
          <Route 
              path='/:category/search/:keyword'
              element={ <Catalog /> } 
          />
          <Route 
              path='/:category/:id' 
              element={ <Detail /> } 
          />
          <Route 
              path='/:category' 
              element={ <Catalog /> } 
          />
          <Route 
              path='/' 
              element={ <Home /> } 
          />
      </Routes>
        <Footer />

    </HashRouter>
    )
}


