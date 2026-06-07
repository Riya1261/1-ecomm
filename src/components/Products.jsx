export default function Products() {
  return (
    <section className="products">
      <h2>Trending Products</h2>

      <div className="cards">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
            alt=""
          />
          <h3>Classic T-Shirt</h3>
          <p>₹999</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
            alt=""
          />
          <h3>Fashion Sneakers</h3>
          <p>₹2499</p>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400"
            alt=""
          />
          <h3>Premium Jacket</h3>
          <p>₹3999</p>
        </div>
      </div>
    </section>
  );
}