import React from 'react';

function Navbar({ currentPage, setCurrentPage, user, onLogout }) {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'products', label: 'Products' },
        ...(user ? [{ id: 'dashboard', label: 'Dashboard' }] : []),
    ];

    return (
        <nav style={styles.nav}>
            <div style={styles.brand} onClick={() => setCurrentPage('home')}>
                🛍️ <span>MyStore</span>
            </div>

            <div style={styles.links}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        style={{
                            ...styles.linkButton,
                            ...(currentPage === item.id ? styles.activeLink : {}),
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div style={styles.authSection}>
                {user ? (
                    <div style={styles.userBox}>
                        <span style={styles.welcomeText}>Hi, <strong>{user}</strong></span>
                        <button onClick={onLogout} style={styles.logoutButton}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div style={styles.authButtons}>
                        <button
                            onClick={() => setCurrentPage('login')}
                            style={{
                                ...styles.authBtn,
                                ...(currentPage === 'login' ? styles.activeAuthBtn : {}),
                            }}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setCurrentPage('register')}
                            style={styles.registerBtn}
                        >
                            Register
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 24px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        fontFamily: 'sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    },
    brand: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#1e293b',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
    },
    links: {
        display: 'flex',
        gap: '8px',
    },
    linkButton: {
        background: 'none',
        border: 'none',
        fontSize: '15px',
        padding: '8px 14px',
        cursor: 'pointer',
        borderRadius: '6px',
        color: '#475569',
        fontWeight: '500',
    },
    activeLink: {
        backgroundColor: '#eff6ff',
        color: '#2563eb',
        fontWeight: '600',
    },
    authSection: {
        display: 'flex',
        alignItems: 'center',
    },
    userBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    welcomeText: {
        fontSize: '14px',
        color: '#334155',
    },
    logoutButton: {
        padding: '6px 12px',
        backgroundColor: '#fee2e2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: '600',
    },
    authButtons: {
        display: 'flex',
        gap: '8px',
    },
    authBtn: {
        padding: '6px 14px',
        background: 'none',
        border: '1px solid #cbd5e1',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        color: '#334155',
    },
    activeAuthBtn: {
        backgroundColor: '#f1f5f9',
        borderColor: '#94a3b8',
    },
    registerBtn: {
        padding: '6px 14px',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
    },
};

export default Navbar;
