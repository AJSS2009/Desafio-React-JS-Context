import { Route, Routes } from 'react-router-dom';

import Home from '../Home';

import Favorito from '../Favorito';

export default () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacto' element={<Favorito />} />
        </Routes>
    )
}

