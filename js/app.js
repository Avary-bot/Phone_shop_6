/* =========================================================
   SHOPX - Shared JavaScript
   Data: localStorage only
   ========================================================= */

const KEYS = {
  users: "shopx_users",
  products: "shopx_products",
  cart: "shopx_cart",
  orders: "shopx_orders",
  currentUser: "shopx_currentUser",
  theme: "shopx_theme",
};

function getData(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return getData(KEYS.users, []);
}
function getProducts() {
  return getData(KEYS.products, []);
}
function getCart() {
  return getData(KEYS.cart, []);
}
function getOrders() {
  return getData(KEYS.orders, []);
}
function getCurrentUser() {
  return getData(KEYS.currentUser, null);
}

function saveUsers(v) {
  setData(KEYS.users, v);
}
function saveProducts(v) {
  setData(KEYS.products, v);
}
function saveCart(v) {
  setData(KEYS.cart, v);
}
function saveOrders(v) {
  setData(KEYS.orders, v);
}

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[ch],
  );
}

function seedProducts() {

    const products = getProducts();

    const defaultProducts = [

        // ==================== IPHONE ====================

        {
            id: 1701,
            name: "iPhone 15 Pro",
            price: 899.00,
            category: "IPhone",
            stock: 10,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Powerful iPhone with a premium camera and fast performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1702,
            name: "iPhone 16 Pro Max",
            price: 1199.00,
            category: "IPhone",
            stock: 15,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Premium iPhone with a large display and advanced camera system.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1703,
            name: "iPhone 16 Pro",
            price: 999.00,
            category: "IPhone",
            stock: 18,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Professional iPhone with excellent performance and camera quality.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1704,
            name: "iPhone 16 Plus",
            price: 899.00,
            category: "IPhone",
            stock: 20,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Large-screen iPhone with excellent battery life.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1705,
            name: "iPhone 16",
            price: 799.00,
            category: "IPhone",
            stock: 25,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Powerful everyday iPhone with a modern design.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1706,
            name: "iPhone 15 Pro Max",
            price: 1099.00,
            category: "IPhone",
            stock: 12,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Premium iPhone with a large display and powerful processor.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1707,
            name: "iPhone 15",
            price: 699.00,
            category: "IPhone",
            stock: 30,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Reliable iPhone with excellent camera and everyday performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1708,
            name: "iPhone 14",
            price: 599.00,
            category: "IPhone",
            stock: 35,
            image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=80",
            description: "Affordable iPhone with excellent performance.",
            seller: "SHOPX",
            reviews: []
        },


        // ==================== SAMSUNG ====================

        {
            id: 1101,
            name: "Samsung Galaxy S25 Ultra",
            price: 1199.00,
            category: "Samsung",
            stock: 15,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "Premium Samsung smartphone with a large display and powerful camera.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1102,
            name: "Samsung Galaxy S25+",
            price: 999.00,
            category: "Samsung",
            stock: 18,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "Premium Samsung smartphone with excellent performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1103,
            name: "Samsung Galaxy S25",
            price: 799.00,
            category: "Samsung",
            stock: 20,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "Compact flagship Samsung smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1104,
            name: "Samsung Galaxy S24 Ultra",
            price: 1099.00,
            category: "Samsung",
            stock: 12,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "High-end Samsung smartphone with S Pen support.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1105,
            name: "Samsung Galaxy S24",
            price: 699.00,
            category: "Samsung",
            stock: 25,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "Powerful Samsung Galaxy smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1106,
            name: "Samsung Galaxy A55",
            price: 449.00,
            category: "Samsung",
            stock: 30,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "Affordable Samsung smartphone with premium design.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1107,
            name: "Samsung Galaxy A35",
            price: 349.00,
            category: "Samsung",
            stock: 35,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "Mid-range Samsung phone for everyday use.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1108,
            name: "Samsung Galaxy A25",
            price: 299.00,
            category: "Samsung",
            stock: 40,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80",
            description: "Affordable Samsung smartphone with a large display.",
            seller: "SHOPX",
            reviews: []
        },


        // ==================== OPPO ====================

        {
            id: 1201,
            name: "Oppo Find X8 Pro",
            price: 999.00,
            category: "Oppo",
            stock: 15,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Premium Oppo smartphone with advanced camera technology.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1202,
            name: "Oppo Find X8",
            price: 799.00,
            category: "Oppo",
            stock: 12,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Modern Oppo smartphone with excellent performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1203,
            name: "Oppo Reno 13 Pro",
            price: 649.00,
            category: "Oppo",
            stock: 20,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Stylish Oppo smartphone with excellent cameras.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1204,
            name: "Oppo Reno 13",
            price: 499.00,
            category: "Oppo",
            stock: 25,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Modern smartphone with strong everyday performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1205,
            name: "Oppo Reno 12 Pro",
            price: 599.00,
            category: "Oppo",
            stock: 18,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Premium mid-range Oppo smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1206,
            name: "Oppo Reno 12",
            price: 449.00,
            category: "Oppo",
            stock: 30,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Slim Oppo smartphone with excellent battery life.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1207,
            name: "Oppo A79",
            price: 299.00,
            category: "Oppo",
            stock: 35,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Affordable Oppo phone with a large display.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1208,
            name: "Oppo A58",
            price: 249.00,
            category: "Oppo",
            stock: 40,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Budget-friendly Oppo smartphone.",
            seller: "SHOPX",
            reviews: []
        },


        // ==================== XIAOMI ====================

        {
            id: 1301,
            name: "Xiaomi 15 Ultra",
            price: 1199.00,
            category: "XiaoMi",
            stock: 15,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Xiaomi flagship with professional camera technology.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1302,
            name: "Xiaomi 15 Pro",
            price: 999.00,
            category: "XiaoMi",
            stock: 18,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Premium Xiaomi smartphone with powerful performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1303,
            name: "Xiaomi 15",
            price: 699.00,
            category: "XiaoMi",
            stock: 20,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Fast and affordable Xiaomi smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1304,
            name: "Xiaomi 14 Ultra",
            price: 999.00,
            category: "XiaoMi",
            stock: 15,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "High-end Xiaomi smartphone focused on photography.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1305,
            name: "Xiaomi 14",
            price: 699.00,
            category: "XiaoMi",
            stock: 25,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Powerful Xiaomi flagship phone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1306,
            name: "Redmi Note 14 Pro",
            price: 399.00,
            category: "XiaoMi",
            stock: 35,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Feature-packed Redmi smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1307,
            name: "Redmi Note 14",
            price: 299.00,
            category: "XiaoMi",
            stock: 40,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Affordable Redmi smartphone with a large display.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1308,
            name: "POCO X7 Pro",
            price: 349.00,
            category: "XiaoMi",
            stock: 30,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Gaming-focused Xiaomi smartphone.",
            seller: "SHOPX",
            reviews: []
        },


        // ==================== VIVO ====================

        {
            id: 1401,
            name: "Vivo X200 Pro",
            price: 999.00,
            category: "Vivo",
            stock: 15,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Premium Vivo flagship with advanced photography.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1402,
            name: "Vivo X200",
            price: 749.00,
            category: "Vivo",
            stock: 18,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Vivo smartphone with a beautiful display.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1403,
            name: "Vivo V40 Pro",
            price: 599.00,
            category: "Vivo",
            stock: 20,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Stylish Vivo phone with excellent camera performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1404,
            name: "Vivo V40",
            price: 449.00,
            category: "Vivo",
            stock: 25,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Modern Vivo smartphone with slim design.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1405,
            name: "Vivo V30 Pro",
            price: 549.00,
            category: "Vivo",
            stock: 20,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Premium mid-range Vivo smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1406,
            name: "Vivo V30",
            price: 399.00,
            category: "Vivo",
            stock: 30,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Slim Vivo smartphone with strong battery life.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1407,
            name: "Vivo Y100",
            price: 299.00,
            category: "Vivo",
            stock: 35,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Affordable Vivo phone for everyday use.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1408,
            name: "Vivo Y28",
            price: 229.00,
            category: "Vivo",
            stock: 40,
            image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
            description: "Budget Vivo smartphone with a large battery.",
            seller: "SHOPX",
            reviews: []
        },


        // ==================== SONY ====================

        {
            id: 1501,
            name: "Sony Xperia 1 VI",
            price: 999.00,
            category: "Sony",
            stock: 8,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Sony Xperia smartphone with premium display and performance.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1502,
            name: "Sony Xperia 1 V",
            price: 899.00,
            category: "Sony",
            stock: 10,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Premium Sony smartphone for creators.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1503,
            name: "Sony Xperia 5 V",
            price: 799.00,
            category: "Sony",
            stock: 12,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Compact Sony flagship smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1504,
            name: "Sony Xperia 10 VI",
            price: 449.00,
            category: "Sony",
            stock: 20,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Mid-range Sony phone with long battery life.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1505,
            name: "Sony Xperia 10 V",
            price: 399.00,
            category: "Sony",
            stock: 25,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Affordable Sony smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1506,
            name: "Sony Xperia 5 IV",
            price: 699.00,
            category: "Sony",
            stock: 15,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Compact premium Sony smartphone.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1507,
            name: "Sony Xperia 1 IV",
            price: 799.00,
            category: "Sony",
            stock: 12,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Creator-focused Sony flagship.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1508,
            name: "Sony Xperia 10 IV",
            price: 349.00,
            category: "Sony",
            stock: 30,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            description: "Affordable Sony smartphone with long battery life.",
            seller: "SHOPX",
            reviews: []
        },


        // ==================== ACCESSORIES ====================

        {
            id: 1601,
            name: "AirPods Pro 2",
            price: 249.00,
            category: "Accessories",
            stock: 30,
            image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
            description: "Premium wireless earbuds with active noise cancellation.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1602,
            name: "Wireless Headphones",
            price: 59.99,
            category: "Accessories",
            stock: 25,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
            description: "Comfortable wireless headphones with rich sound.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1603,
            name: "Smart Watch",
            price: 129.00,
            category: "Accessories",
            stock: 12,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
            description: "Modern smartwatch for fitness and notifications.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1604,
            name: "USB-C Power Bank",
            price: 34.99,
            category: "Accessories",
            stock: 45,
            image: "https://images.unsplash.com/photo-1609592424990-6f7c0c9b9f4a?auto=format&fit=crop&w=900&q=80",
            description: "Compact power bank with USB-C fast charging.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1605,
            name: "20W USB-C Charger",
            price: 24.99,
            category: "Accessories",
            stock: 50,
            image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
            description: "Fast USB-C charger for smartphones.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1606,
            name: "USB-C Charging Cable",
            price: 14.99,
            category: "Accessories",
            stock: 80,
            image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
            description: "Durable USB-C charging and data cable.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1607,
            name: "Phone Protective Case",
            price: 19.99,
            category: "Accessories",
            stock: 60,
            image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=80",
            description: "Protective phone case with shock-resistant design.",
            seller: "SHOPX",
            reviews: []
        },

        {
            id: 1608,
            name: "Wireless Charging Pad",
            price: 29.99,
            category: "Accessories",
            stock: 40,
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",
            description: "Convenient wireless charging pad for compatible devices.",
            seller: "SHOPX",
            reviews: []
        }
    ];


    // =====================================================
    // ADD MISSING PRODUCTS WITHOUT DELETING EXISTING DATA
    // =====================================================

    defaultProducts.forEach(defaultProduct => {

        const exists = products.some(
            product => product.id === defaultProduct.id
        );

        if (!exists) {
            products.push(defaultProduct);
        }

    });

    saveProducts(products);
}
seedProducts();

function hashPassword(password) {
  // Demo-only obfuscation. Do not use this as production password security.
  return btoa(unescape(encodeURIComponent(password)));
}

function signupUser(name, email, password) {
  name = name.trim();
  email = email.trim().toLowerCase();
  password = password.trim();

  if (!name || !email || !password) {
    return { ok: false, message: "Please fill in all fields." };
  }
  if (password.length < 6) {
    return { ok: false, message: "Password must be at least 6 characters." };
  }

  const users = getUsers();
  if (users.some((u) => u.email === email)) {
    return { ok: false, message: "This email is already registered." };
  }

  const user = {
    id: Date.now(),
    name,
    email,
    password: hashPassword(password),
    role: "customer",
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  saveUsers(users);
  localStorage.setItem(KEYS.currentUser, JSON.stringify(user));

  return { ok: true, user };
}

function loginUser(email, password) {
  email = email.trim().toLowerCase();
  const user = getUsers().find(
    (u) => u.email === email && u.password === hashPassword(password),
  );

  if (!user) return { ok: false, message: "Invalid email or password." };

  localStorage.setItem(KEYS.currentUser, JSON.stringify(user));
  return { ok: true, user };
}

function logoutUser() {
  localStorage.removeItem(KEYS.currentUser);
}

function requireLogin() {
  if (!getCurrentUser()) {
    location.href = "../auth/login.html";
    return false;
  }
  return true;
}

function requireAdmin() {
  const user = getCurrentUser();
  if (!user || user.role !== "admin") {
    location.href = "../auth/login.html";
    return false;
  }
  return true;
}

function ensureAdminDemo() {
  const users = getUsers();
  if (!users.some((u) => u.email === "admin@shopx.com")) {
    users.push({
      id: 1,
      name: "SHOPX Admin",
      email: "admin@shopx.com",
      password: hashPassword("admin123"),
      role: "admin",
      createdAt: new Date().toISOString(),
    });
    saveUsers(users);
  }
}

function productRating(product) {
  const reviews = product.reviews || [];
  if (!reviews.length) return 0;
  return (
    reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / reviews.length
  );
}

function stars(rating) {
  const n = Math.round(rating);
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function addToCart(productId) {
  const products = getProducts();
  const product = products.find((p) => p.id === Number(productId));
  if (!product) return { ok: false, message: "Product not found." };
  if (product.stock <= 0)
    return { ok: false, message: "Product is out of stock." };

  const cart = getCart();
  const item = cart.find((i) => i.id === product.id);

  if (item) {
    if (item.qty >= product.stock) {
      return {
        ok: false,
        message: "You cannot add more than available stock.",
      };
    }
    item.qty++;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  saveCart(cart);
  return { ok: true, message: `${product.name} added to cart.` };
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + Number(i.qty), 0);
}

function cartTotal() {
  const products = getProducts();
  return getCart().reduce((sum, item) => {
    const p = products.find((x) => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function checkout() {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Please login first." };

  const cart = getCart();
  if (!cart.length) return { ok: false, message: "Your cart is empty." };

  const products = getProducts();
  const orderItems = [];

  for (const item of cart) {
    const product = products.find((p) => p.id === item.id);
    if (!product) continue;
    if (product.stock < item.qty) {
      return { ok: false, message: `Not enough stock for ${product.name}.` };
    }

    product.stock -= item.qty;
    orderItems.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      qty: item.qty,
    });
  }

  const orders = getOrders();
  const total = orderItems.reduce((s, i) => s + i.price * i.qty, 0);

  orders.push({
    id: "ORD-" + Date.now(),
    userId: user.id,
    customer: user.name,
    email: user.email,
    items: orderItems,
    total,
    status: "Completed",
    createdAt: new Date().toISOString(),
  });

  saveProducts(products);
  saveOrders(orders);
  saveCart([]);

  return { ok: true, message: "Order completed successfully!" };
}

function createProduct(data) {
  const user = getCurrentUser();
  if (!user) return { ok: false, message: "Please login first." };

  const products = getProducts();
  const product = {
    id: Date.now(),
    name: data.name.trim(),
    price: Number(data.price),
    category: data.category,
    stock: Number(data.stock),
    image: data.image.trim(),
    description: data.description.trim(),
    seller: user.name,
    sellerId: user.id,
    reviews: [],
  };

  if (
    !product.name ||
    product.price <= 0 ||
    product.stock < 0 ||
    !product.image
  ) {
    return { ok: false, message: "Please enter valid product information." };
  }

  products.unshift(product);
  saveProducts(products);
  return { ok: true, product };
}

function deleteProduct(productId) {
  const products = getProducts().filter((p) => p.id !== Number(productId));
  saveProducts(products);
}

function showToast(message, type = "success") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.textContent = message;
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function applyTheme() {
  const theme = localStorage.getItem(KEYS.theme) || "light";
  document.documentElement.dataset.theme = theme;
  const icon = document.getElementById("themeIcon");
  if (icon)
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function toggleTheme() {
  const current = localStorage.getItem(KEYS.theme) || "light";
  localStorage.setItem(KEYS.theme, current === "dark" ? "light" : "dark");
  applyTheme();
}

document.addEventListener("DOMContentLoaded", () => {
  seedProducts();
  ensureAdminDemo();
  applyTheme();
});

