import React, { useState } from 'react';

function Login({ onLogin, setCurrentPage }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            setError('Please enter both username and password.');
            return;
        }

        setError('');
        onLogin(username);
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login</h2>
                <p style={styles.subtitle}>Welcome back! Please enter your details.</p>

                {error && <div style={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Username or Email</label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Sign In
                    </button>
                </form>

                <p style={styles.footerText}>
                    Don't have an account?{' '}
                    <span
                        onClick={() => setCurrentPage && setCurrentPage('register')}
                        style={styles.link}
                    >
                        Register here
                    </span>
                </p>

                <p style={styles.hint}>
                    Hint: Enter any test credentials to log in.
                </p>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        padding: '20px',
    },
    card: {
        width: '100%',
        maxWidth: '380px',
        background: '#ffffff',
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0',
    },
    title: {
        margin: '0 0 8px 0',
        fontSize: '24px',
        color: '#0f172a',
        textAlign: 'center',
    },
    subtitle: {
        margin: '0 0 24px 0',
        fontSize: '14px',
        color: '#64748b',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    },
    label: {
        fontSize: '13px',
        fontWeight: '600',
        color: '#334155',
    },
    input: {
        padding: '10px 14px',
        fontSize: '14px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        outline: 'none',
    },
    button: {
        marginTop: '8px',
        padding: '12px',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
    },
    error: {
        backgroundColor: '#fee2e2',
        color: '#991b1b',
        padding: '10px',
        borderRadius: '6px',
        fontSize: '13px',
        marginBottom: '16px',
        textAlign: 'center',
    },
    footerText: {
        marginTop: '20px',
        fontSize: '13px',
        color: '#64748b',
        textAlign: 'center',
    },
    link: {
        color: '#2563eb',
        cursor: 'pointer',
        fontWeight: '600',
        textDecoration: 'underline',
    },
    hint: {
        marginTop: '12px',
        fontSize: '12px',
        color: '#94a3b8',
        textAlign: 'center',
    },
};

export default Login;
