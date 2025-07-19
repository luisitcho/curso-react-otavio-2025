import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { About } from '../../pages/About';
import { useEffect } from 'react';
import { History } from '../../pages/History';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/history/' element={<History />} />
                <Route path='/about/' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    );
}
