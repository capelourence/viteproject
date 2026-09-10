import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [userError, setUserError] = useState("");
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Classic Banana Chips",
      price: 50,
      description:
        "Crispy and delicious banana chips made from locally grown Philippine bananas.",
    },
    {
      id: 2,
      name: "Sweet Banana Chips",
      price: 60,
      description:
        "Sweet and crunchy banana chips perfect for merienda.",
    },
    {
      id: 3,
      name: "Garlic Banana Chips",
      price: 65,
      description:
        "Crispy banana chips with a delicious garlic flavor.",
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Unable to load users.");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setUserError(error.message);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          🍌 <span>BananaPH</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#users">Users</a>
          <a href="#about">About</a>
          <button className="cart-btn">🛒 Cart</button>
        </div>
      </nav>

      {/* HERO / FRONT PAGE */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-text">

            <div className="philippines-badge">
              🇵🇭 <span>Proudly Made in the Philippines</span>
            </div>

            <h1>
              A Taste of
              <br />
              <span>Filipino</span> Goodness.
            </h1>

            <p className="hero-description">
              Crispy, sweet, and delicious banana chips made
              from locally grown Philippine bananas.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="shop-btn">
                Shop Our Snacks →
              </a>

              <a href="#users" className="users-btn">
                👥 View Users
              </a>
            </div>

            <div className="hero-stats">

              <div>
                <strong>100%</strong>
                <span>Filipino</span>
              </div>

              <div>
                <strong>Fresh</strong>
                <span>Ingredients</span>
              </div>

              <div>
                <strong>₱50+</strong>
                <span>Affordable</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="circle-one"></div>

            <div className="banana-product">
              🍌
            </div>

            <div className="floating-card card-one">
              <span>⭐</span>
              <div>
                <strong>Fresh & Crispy</strong>
                <small>Made with care</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>🇵🇭</span>
              <div>
                <strong>Locally Made</strong>
                <small>Philippine bananas</small>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature">
          <div className="feature-icon">🌱</div>
          <div>
            <h3>Locally Sourced</h3>
            <p>Fresh bananas from Filipino farmers.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">✨</div>
          <div>
            <h3>Fresh & Crispy</h3>
            <p>Made for a satisfying crunchy snack.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🇵🇭</div>
          <div>
            <h3>Proudly Filipino</h3>
            <p>A simple snack with a Filipino touch.</p>
          </div>
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">

        <div className="section-heading">

          <div>
            <span>OUR FAVORITES</span>
            <h2>Choose Your Favorite</h2>
          </div>

          <p>
            Simple ingredients. Great flavor.
            Perfect for merienda.
          </p>

        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image">
                <div className="product-circle">
                  🍌
                </div>
              </div>

              <div className="product-info">

                <span className="category">
                  FILIPINO SNACK
                </span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="product-bottom">

                  <strong>₱{product.price}</strong>

                  <button className="add-btn">
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* USERS */}
      <section className="users-page" id="users">

        <div className="users-header">

          <div>
            <span className="users-label">
              BANANAPH COMMUNITY
            </span>

            <h2>Our Users</h2>

            <p>
              Meet the people connected to BananaPH.
            </p>
          </div>

          <a href="#home" className="back-home">
            ↑ Back to Home
          </a>

        </div>

        <div className="user-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search users by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loadingUsers && (
          <div className="user-message">
            <div className="loading-icon">⏳</div>
            <h3>Loading Users...</h3>
            <p>Please wait while we get the users.</p>
          </div>
        )}

        {userError && (
          <div className="user-message error">
            <div className="loading-icon">⚠️</div>
            <h3>Something went wrong</h3>
            <p>{userError}</p>
          </div>
        )}

        {!loadingUsers && !userError && (
          <>
            <div className="users-count">
              <strong>{filteredUsers.length}</strong> users found
            </div>

            <div className="users-grid">

              {filteredUsers.map((user) => (
                <div className="user-card" key={user.id}>

                  <div className="user-card-top">

                    <div className="user-avatar">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <span className="user-number">
                        USER #{user.id}
                      </span>

                      <h3>{user.name}</h3>

                      <p className="username">
                        @{user.username}
                      </p>
                    </div>

                  </div>

                  <div className="user-details">

                    <div className="detail">
                      <span>📧</span>
                      <div>
                        <small>Email</small>
                        <p>{user.email}</p>
                      </div>
                    </div>

                    <div className="detail">
                      <span>📞</span>
                      <div>
                        <small>Phone</small>
                        <p>{user.phone}</p>
                      </div>
                    </div>

                    <div className="detail">
                      <span>📍</span>
                      <div>
                        <small>Location</small>
                        <p>{user.address.city}</p>
                      </div>
                    </div>

                    <div className="detail">
                      <span>🏢</span>
                      <div>
                        <small>Company</small>
                        <p>{user.company.name}</p>
                      </div>
                    </div>

                  </div>

                  <button className="view-user-btn">
                    View Profile →
                  </button>

                </div>
              ))}

            </div>

            {filteredUsers.length === 0 && (
              <div className="no-users">
                <div>🔍</div>
                <h3>No users found</h3>
                <p>Try searching for another name.</p>
              </div>
            )}
          </>
        )}

      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-content">

          <span>ABOUT BANANAPH</span>

          <h2>
            Simple snacks.
            <br />
            Filipino heart. 🇵🇭
          </h2>

          <p>
            BananaPH brings you delicious banana chips made
            with locally sourced bananas. Our goal is to
            showcase a simple Filipino snack that everyone
            can enjoy.
          </p>

          <a href="#products" className="about-btn">
            Explore Products →
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-brand">
          🍌 <strong>BananaPH</strong>
        </div>

        <p>Made with Filipino love 🇵🇭</p>

        <p>© 2026 BananaPH. All rights reserved.</p>

      </footer>

    </div>
  );
}

export default App;