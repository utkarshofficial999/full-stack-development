import React from 'react';

function Dashboard({ user, onLogout, setCurrentPage }) {
    return (
        <div style={styles.container}>
            {/* Header banner */}
            <div style={styles.header}>
                <div>
                    <h1 style={styles.title}>User Dashboard</h1>
                    <p style={styles.subtitle}>
                        Welcome back, <strong>{user || 'Guest'}</strong>! Here is an overview of your account.
                    </p>
                </div>
                <button onClick={onLogout} style={styles.logoutBtn}>
                    Logout
                </button>
            </div>

            {/* Quick Stats Grid */}
            <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                    <div style={styles.statNumber}>30+</div>
                    <div style={styles.statLabel}>Available Products</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statNumber}>5</div>
                    <div style={styles.statLabel}>Wishlist Items</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statNumber}>2</div>
                    <div style={styles.statLabel}>Completed Orders</div>
                </div>
                <div style={styles.statCard}>
                    <div style={{ ...styles.statNumber, color: '#16a34a' }}>Active</div>
                    <div style={styles.statLabel}>Account Status</div>
                </div>
            </div>

            {/* Quick Actions */}
            <div style={styles.actionSection}>
                <h3 style={styles.sectionTitle}>Quick Actions</h3>
                <div style={styles.actionButtons}>
                    <button
                        onClick={() => setCurrentPage('products')}
                        style={styles.actionBtnPrimary}
                    >
                        Browse Product Catalog 🛒
                    </button>
                    <button
                        onClick={() => setCurrentPage('home')}
                        style={styles.actionBtnSecondary}
                    >
                        Back to Home 🏠
                    </button>
                </div>
            </div>

            {/* Profile Overview Card */}
            <div style={styles.profileCard}>
                <h3 style={styles.sectionTitle}>Account Profile</h3>
                <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Username:</span>
                    <span style={styles.infoValue}>{user || 'Guest'}</span>
                </div>
                <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Role:</span>
                    <span style={styles.infoValue}>Member</span>
                </div>
                <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Email Notifications:</span>
                    <span style={styles.infoValue}>Enabled</span>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '960px',
        margin: '0 auto',
        padding: '36px 20px',
        fontFamily: 'sans-serif',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '20px',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '28px',
        flexWrap: 'wrap',
        gap: '12px',
    },
    title: {
        margin: '0 0 6px 0',
        fontSize: '28px',
        color: '#0f172a',
    },
    subtitle: {
        margin: 0,
        fontSize: '15px',
        color: '#64748b',
    },
    logoutBtn: {
        padding: '8px 16px',
        backgroundColor: '#fee2e2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px',
    },
    statCard: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
        textAlign: 'center',
    },
    statNumber: {
        fontSize: '26px',
        fontWeight: 'bold',
        color: '#2563eb',
        marginBottom: '4px',
    },
    statLabel: {
        fontSize: '13px',
        color: '#64748b',
    },
    actionSection: {
        backgroundColor: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        marginBottom: '28px',
    },
    sectionTitle: {
        margin: '0 0 16px 0',
        fontSize: '18px',
        color: '#0f172a',
    },
    actionButtons: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
    },
    actionBtnPrimary: {
        backgroundColor: '#2563eb',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
    },
    actionBtnSecondary: {
        backgroundColor: '#f1f5f9',
        color: '#334155',
        border: '1px solid #cbd5e1',
        padding: '10px 20px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
    },
    profileCard: {
        backgroundColor: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
    },
    infoRow: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid #f1f5f9',
        fontSize: '14px',
    },
    infoLabel: {
        color: '#64748b',
    },
    infoValue: {
        fontWeight: '600',
        color: '#0f172a',
    },
};

export default Dashboard;
