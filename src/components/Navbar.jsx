// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar" style={{ 
      background: 'var(--bg)', 
      color: 'var(--text-h)', 
      borderBottom: '1px solid var(--border)',
      padding: '20px 5%' 
    }}>
      <h2 style={{ margin: 0, fontWeight: '700' }}>FashionHub</h2>
      <ul style={{ color: 'var(--text)' }}>
        <li>Home</li>
        <li>Shop</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>
      <button className="nav-btn">Sign Up</button>
    </nav>
  );
}