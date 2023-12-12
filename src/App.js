import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CounterPage from './pages/test1/counter/container/CounterPage';
import SamplePage from './pages/test1/sample/container/SamplePage';
import Home from './pages/components/Home';
import Header from './pages/components/Header';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/sample" element={<SamplePage />} />
            </Routes>
        </div>
    );
}

export default App;
