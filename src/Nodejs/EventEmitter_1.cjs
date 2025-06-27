const Emitter = require('events');

class FoodOrder extends Emitter {

    constructor() {
        super();
        this.orderNumber = 0;
    }

    placeOrder(items) {
        this.orderNumber++;
        if (this.listenerCount('order') === 0) {
            this.emit('error', new Error('No listeners for order event!'));
        } else {
            this.emit('order', items, this.orderNumber);
        }
    }
}

const orderSystem = new FoodOrder();

let handleOrder = (items, number) => {
    console.log(`Order # ${items} | received: ${number}`);
}


orderSystem.on('order', handleOrder)
orderSystem.on('error', (err) => console.error(err));
orderSystem.once('order', () => {
    console.log("First  order of the day");
})
orderSystem.off('order', handleOrder);

orderSystem.placeOrder(['Pizza', 'Burger', 'Briyani']);
orderSystem.placeOrder(['Coffee', 'Briyani']);
orderSystem.removeAllListeners('order');
console.log(orderSystem);
orderSystem.placeOrder(['Coffee', 'Briyani']);
