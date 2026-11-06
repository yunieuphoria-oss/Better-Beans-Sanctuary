function betterBeansApp() {
    return {
        cartOpen: false,
        authModalOpen: false,
        authTargetRole: 'customer',
        currentUser: null,
        userRole: 'customer',
        adminView: 'analytics',
        cart: [],
        quizStep: 1,
        quizAnswer1: '',
        quizResult: { name: '', desc: '' },
        showAddModal: false,
        receiptModalOpen: false,
        activeReceipt: null,

        loginInput: {
            username: '',
            password: ''
        },

        newProduct: {
            type: 'beans',
            name: '',
            origin: '',
            price: 0,
            description: ''
        },

        products: {
            beans: [
                { 
                    id: 'b1', 
                    name: 'Mt. Apo Santa Cruz', 
                    origin: 'Santa Cruz, Davao del Sur', 
                    price: 580, 
                    description: 'High-altitude natural process with bright wild berry notes and clean sugarcane sweetness.', 
                    notes: ['Wild Berry', 'Sugarcane', 'Vibrant'], 
                    inStock: true,
                    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80'
                },
                { 
                    id: 'b2', 
                    name: 'Bukidnon Kitanglad', 
                    origin: 'Mt. Kitanglad, Bukidnon', 
                    price: 550, 
                    description: 'Washed process roast offering smooth milk chocolate aromas and toasted macadamia nut complexity.', 
                    notes: ['Chocolate', 'Macadamia', 'Balanced'], 
                    inStock: true,
                    img: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80'
                },
                { 
                    id: 'b3', 
                    name: 'Lake Sebu Fine Robusta', 
                    origin: 'Lake Sebu, South Cotabato', 
                    price: 480, 
                    description: 'Bold, low-acidity single origin featuring intense dark caramel and toasted malt character.', 
                    notes: ['Caramel', 'Toasted Malt', 'Bold'], 
                    inStock: true,
                    img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=600&q=80'
                }
            ],
            drinks: [
                { 
                    id: 'd1', 
                    name: 'Sea Salt Cold Brew', 
                    category: 'Signature Beverage', 
                    price: 180, 
                    description: '18-hour cold steeped Mt. Apo beans topped with house-made salted cream.', 
                    inStock: true,
                    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80'
                },
                { 
                    id: 'd2', 
                    name: 'Spanish Latte', 
                    category: 'Espresso Bar', 
                    price: 170, 
                    description: 'Double shot espresso balanced with condensed milk and steamed fresh dairy.', 
                    inStock: true,
                    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
                },
                { 
                    id: 'd3', 
                    name: 'Davao Cacao Mocha', 
                    category: 'Specialty', 
                    price: 190, 
                    description: 'Artisanal single-origin cacao melted into espresso with micro-foamed milk.', 
                    inStock: true,
                    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80'
                }
            ]
        },

        orders: [
            { id: 'ORD-101', customer: 'Kishel Rodriguez', summary: '1x Mt. Apo Santa Cruz, 2x Sea Salt Cold Brew', total: 940, status: 'Pending' },
            { id: 'ORD-102', customer: 'Christopher Limosnero', summary: '1x Bukidnon Kitanglad', total: 550, status: 'Preparing' },
            { id: 'ORD-103', customer: 'Kim HongJoong', summary: '2x Spanish Latte', total: 340, status: 'Completed' },
            { id: 'ORD-104', customer: 'Park Seonghwa', summary: '2x Spanish Latte', total: 340, status: 'Completed' },
            { id: 'ORD-105', customer: 'Jung Yunho', summary: 'Cacao Mocha', total: 190, status: 'Completed' },
            { id: 'ORD-106', customer: 'Kang Yeosang', summary: 'Seasalt Cold Brew', total: 180, status: 'Completed' },
            { id: 'ORD-107', customer: 'Song Mingi', summary: 'Seasalt Cold Brew', total: 180, status: 'Completed' },
            { id: 'ORD-108', customer: 'Choi San', summary: 'Seasalt Cold Brew', total: 180, status: 'Completed' },
            { id: 'ORD-109', customer: 'Jung Wooyoung', summary: 'Cacao Mocha', total: 190, status: 'Completed' },
            { id: 'ORD-110', customer: 'Choi Jongho', summary: 'Seasalt Cold Brew', total: 180, status: 'Completed' }
        ],

        customers: [
            { name: 'Kishel Rodriguez', email: 'kishel@example.com', address: 'Ecoland, Davao City', tier: 'VIP Customer', orderCount: 14 },
            { name: 'Christopher Limosnero', email: 'Christopher@example.com', address: 'Matina, Davao City', tier: 'Regular Customer', orderCount: 5 }
        ],

        get cartCount() {
            return this.cart.reduce((sum, item) => sum + item.qty, 0);
        },

        get cartTotal() {
            return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        },

        get totalRevenue() {
            return this.orders.reduce((sum, order) => sum + order.total, 0);
        },

        openAuthModal(role) {
            this.authTargetRole = role;
            this.loginInput.username = '';
            this.loginInput.password = '';
            this.authModalOpen = true;
        },

        confirmLogin() {
            if (this.authTargetRole === 'admin') {
                this.currentUser = { name: 'Ecoland Admin', email: this.loginInput.username || 'admin@betterbeansco.ph' };
                this.userRole = 'admin';
                this.adminView = 'analytics';
            } else {
                this.currentUser = { name: this.loginInput.username || 'Kishel Rodriguez', email: 'customer@example.com' };
                this.userRole = 'customer';
            }
            this.authModalOpen = false;
        },

        logout() {
            this.currentUser = null;
            this.userRole = 'customer';
        },

        setAdminTab(tabName) {
            if (this.userRole !== 'admin') {
                alert('Access Denied: Administrative privileges required.');
                return;
            }
            this.adminView = tabName;
        },

        addToCart(item) {
            if (!item.inStock) return;
            let existing = this.cart.find(i => i.id === item.id);
            if (existing) {
                existing.qty++;
            } else {
                this.cart.push({ ...item, qty: 1 });
            }
            this.cartOpen = true;
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(i => i.id !== id);
        },

        checkout() {
            if (this.cart.length === 0) return;

            const orderId = 'ORD-' + Math.floor(100 + Math.random() * 900);
            const customerName = this.currentUser ? this.currentUser.name : 'Guest Customer (Ecoland)';
            const orderItems = [...this.cart];
            const totalAmount = this.cartTotal;
            const dateStr = new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            const summaryStr = orderItems.map(i => `${i.qty}x ${i.name}`).join(', ');

            // Push to Admin Pipeline
            this.orders.unshift({
                id: orderId,
                customer: customerName,
                summary: summaryStr,
                total: totalAmount,
                status: 'Pending'
            });

            // Set active digital receipt
            this.activeReceipt = {
                id: orderId,
                date: dateStr,
                customer: customerName,
                items: orderItems,
                subtotal: totalAmount,
                vat: totalAmount * 0.12,
                grandTotal: totalAmount
            };

            this.cart = [];
            this.cartOpen = false;
            this.receiptModalOpen = true;
        },
        
        updateOrderStatus(orderId, newStatus) {
            if (this.userRole !== 'admin') return;
            let order = this.orders.find(o => o.id === orderId);
            if (order) order.status = newStatus;
        },

        toggleStock(id) {
            if (this.userRole !== 'admin') return;
            let item = [...this.products.beans, ...this.products.drinks].find(i => i.id === id);
            if (item) item.inStock = !item.inStock;
        },

        deleteProduct(id) {
            if (this.userRole !== 'admin') return;
            this.products.beans = this.products.beans.filter(i => i.id !== id);
            this.products.drinks = this.products.drinks.filter(i => i.id !== id);
        },

        addNewProduct() {
            if (this.userRole !== 'admin') return;
            const newId = 'p-' + Date.now();
            const productObj = {
                id: newId,
                name: this.newProduct.name,
                origin: this.newProduct.origin,
                category: this.newProduct.origin,
                price: Number(this.newProduct.price),
                description: this.newProduct.description,
                notes: ['Fresh Harvest'],
                inStock: true,
                img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
            };

            if (this.newProduct.type === 'beans') {
                this.products.beans.push(productObj);
            } else {
                this.products.drinks.push(productObj);
            }

            this.showAddModal = false;
            this.newProduct = { type: 'beans', name: '', origin: '', price: 0, description: '' };
        }
    };
}