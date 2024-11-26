import { createBrowserRouter} from 'react-router-dom'

import { Home } from '../Containers/Home'
import { ArtistsCast } from '../Containers/Artists'
import { Releases } from '../Containers/releases'
import { About } from '../Containers/About'

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },

    {
        path: '/artists',
        element: <ArtistsCast/>
    },
    
    {
        path: '/releases',
        element: <Releases/>
    },


    {
        path: '/sobre',
        element: <About/>
    },


])