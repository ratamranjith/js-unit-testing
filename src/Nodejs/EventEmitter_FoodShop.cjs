const EventEmitter = require('events');

class FoodShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 1;
        this.queue = [];
        this.isProcessing = false;
    }

    placeOrder(name, items) {
        const order = {
            name,
            items,
            orderNumber: this.orderNumber++
        };
        this.queue.push(order);
        this.processQueue();
    }

    async processQueue() {
        if (this.isProcessing || this.queue.length === 0) return;

        this.isProcessing = true;
        const order = this.queue.shift();
        await processOrder(order);
        this.isProcessing = false;

        // Process next order in queue
        this.processQueue();
    }
}

// Simulate delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Process a single order
async function processOrder(order) {
    console.log(`🛎️ Order #${order.orderNumber} received from ${order.name}`);
    console.log(`📝 Items: ${order.items.join(', ')}`);
    console.log('🧑‍🍳 Preparing...');
    await delay(2000);
    console.log(`✅ Order #${order.orderNumber} prepared.`);
    console.log('🚚 Delivering...');
    await delay(1500);
    console.log(`📦 Order #${order.orderNumber} delivered to ${order.name}`);
    console.log('---------------------------');
}

const shop = new FoodShop();

// Place all orders immediately — they'll queue and run one after another
const orders = [
    { name: 'Antony1', items: ['Pizza', 'Burger'] },
    { name: 'Antony2', items: ['Fries', 'Cola'] },
    { name: 'Antony3', items: ['Tacos'] }
];

orders.forEach(order => {
    shop.placeOrder(order.name, order.items);
});
