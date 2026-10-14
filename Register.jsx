import React, { useState } from 'react';

function Register({ onRegister, setCurrentPage }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !password || !confirmPassword) {
            setError('Please fill out all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (password.length < 4) {
            setError('Password must be at least 4 characters long.');
            return;
        }

        setError('');
        setSuccess('Registration successful! Logging you in...');

        setTimeout(() => {
            onRegister(name);
        }, 800);
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h2 style={styles.title}>Create Account</h2>
                <p style={styles.subtitle}>Sign up to start exploring products and save favorites.</p>

                {error && <div style={styles.error}>{error}</div>}
                {success && <div style={styles.success}>{success}</div>}

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Full Name</label>
                        <input
                            type="text"
                            placeholder="e.g. John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address / Username</label>
                        <input
                            type="text"
                            placeholder="e.g. john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Re-enter password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Register
                    </button>
                </form>

                <p style={styles.footerText}>
                    Already have an account?{' '}
                    <span
                        onClick={() => setCurrentPage('login')}
                        style={styles.link}
                    >
                        Sign in
                    </span>
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
        maxWidth: '400px',
        background: '#ffffff',
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e2e8f0',
    },
    title: {
        margin: '0 0 6px 0',
        fontSize: '24px',
        color: '#0f172a',
        textAlign: 'center',
    },
    subtitle: {
        margin: '0 0 20px 0',
        fontSize: '14px',
        color: '#64748b',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
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
        marginTop: '6px',
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
    success: {
        backgroundColor: '#dcfce7',
        color: '#166534',
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
};

export default Register;
