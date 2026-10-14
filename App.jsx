import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import ProductList from './javscrpt.jsx';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [user, setUser] = useState(null);

    const handleLogin = (username) => {
        setUser(username);
        setCurrentPage('dashboard');
    };

    const handleRegister = (username) => {
        setUser(username);
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        setUser(null);
        setCurrentPage('home');
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                user={user}
                onLogout={handleLogout}
            />

            <main>
                {currentPage === 'home' && (
                    <Home setCurrentPage={setCurrentPage} user={user} />
                )}

                {currentPage === 'products' && (
                    <ProductList user={user} onLogout={handleLogout} />
                )}

                {currentPage === 'dashboard' && (
                    user ? (
                        <Dashboard
                            user={user}
                            onLogout={handleLogout}
                            setCurrentPage={setCurrentPage}
                        />
                    ) : (
                        <Login
                            onLogin={handleLogin}
                            setCurrentPage={setCurrentPage}
                        />
                    )
                )}

                {currentPage === 'login' && (
                    <Login
                        onLogin={handleLogin}
                        setCurrentPage={setCurrentPage}
                    />
                )}

                {currentPage === 'register' && (
                    <Register
                        onRegister={handleRegister}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
