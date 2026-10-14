import React, { useState, useEffect } from 'react';

function ProductList({ user, onLogout }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h3 style={{ textAlign: 'center', marginTop: '40px' }}>Loading products...</h3>;
    }

    return (
        <div style={{ maxWidth: '900px', margin: '20px auto', padding: '0 16px', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ margin: 0 }}>Product List</h1>
                {user && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '14px', color: '#475569' }}>
                            Hello, <strong>{user}</strong>
                        </span>
                        <button
                            onClick={onLogout}
                            style={{
                                padding: '6px 12px',
                                borderRadius: '6px',
                                border: '1px solid #ef4444',
                                backgroundColor: '#fef2f2',
                                color: '#dc2626',
                                cursor: 'pointer',
                                fontWeight: '600',
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: '8px 12px', width: '260px', borderRadius: '6px', border: '1px solid #ccc' }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {filtered.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            padding: '12px',
                            background: '#fff',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{ width: '100%', height: '140px', objectFit: 'contain' }}
                        />
                        <h4 style={{ margin: '10px 0 6px', fontSize: '15px' }}>{product.title}</h4>
                        <p style={{ margin: 0, fontWeight: 'bold', color: '#2563eb' }}>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
