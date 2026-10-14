import React from 'react';

function Home({ setCurrentPage, user }) {
    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>Welcome to MyStore</h1>
                <p style={styles.heroSubtitle}>
                    A simple full-stack beginner application demonstrating React state, live API fetching, and user authentication.
                </p>
                <div style={styles.buttonGroup}>
                    <button
                        onClick={() => setCurrentPage('products')}
                        style={styles.primaryButton}
                    >
                        Browse Products 🛒
                    </button>
                    {!user ? (
                        <button
                            onClick={() => setCurrentPage('register')}
                            style={styles.secondaryButton}
                        >
                            Create an Account
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentPage('dashboard')}
                            style={styles.secondaryButton}
                        >
                            Open Dashboard 📊
                        </button>
                    )}
                </div>
            </div>

            {/* Feature Cards */}
            <div style={styles.cardGrid}>
                <div style={styles.card}>
                    <div style={styles.cardIcon}>📦</div>
                    <h3 style={styles.cardTitle}>Live Product Catalog</h3>
                    <p style={styles.cardText}>
                        Fetches live real-world product data from DummyJSON with fast search and clean pricing cards.
                    </p>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardIcon}>👤</div>
                    <h3 style={styles.cardTitle}>User Authentication</h3>
                    <p style={styles.cardText}>
                        Easy registration and login flow to access your personalized user dashboard and account actions.
                    </p>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardIcon}>⚡</div>
                    <h3 style={styles.cardTitle}>Beginner-Friendly React</h3>
                    <p style={styles.cardText}>
                        Clean and minimal code built with standard React hooks (useState and useEffect) with zero bloat.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '960px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'sans-serif',
    },
    hero: {
        textAlign: 'center',
        padding: '50px 20px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        marginBottom: '40px',
    },
    heroTitle: {
        fontSize: '36px',
        color: '#0f172a',
        margin: '0 0 16px 0',
    },
    heroSubtitle: {
        fontSize: '17px',
        color: '#64748b',
        maxWidth: '600px',
        margin: '0 auto 28px auto',
        lineHeight: '1.5',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap',
    },
    primaryButton: {
        backgroundColor: '#2563eb',
        color: '#ffffff',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
    },
    secondaryButton: {
        backgroundColor: '#f1f5f9',
        color: '#334155',
        border: '1px solid #cbd5e1',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
    },
    cardGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
    },
    cardIcon: {
        fontSize: '30px',
        marginBottom: '12px',
    },
    cardTitle: {
        margin: '0 0 8px 0',
        fontSize: '18px',
        color: '#0f172a',
    },
    cardText: {
        margin: 0,
        fontSize: '14px',
        color: '#64748b',
        lineHeight: '1.5',
    },
};

export default Home;
