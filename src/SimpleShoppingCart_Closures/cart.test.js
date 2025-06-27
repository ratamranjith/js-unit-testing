import { it, describe, expect } from 'vitest';
import shopping_cart from './cart';

describe('Shopping Cart method', () => {
    it('adding the products', () => {
        const sc = shopping_cart();

        for (let i = 0; i < 10; i++) {
            const name = `cintol-${i}`;
            const product = {
                name,
                quantity: 5 + i,
                price: 5 * i,
                discount: (i % 2 === 0) ? 20 : 0,
                description: `Sample Product -${i}`
            };
            sc.addItem(product);
        }

        const cartItems = sc.display();

        expect(Object.keys(cartItems).length).toBe(10);
        expect(cartItems['cintol-0'].quantity).toBe(5);
        expect(cartItems['cintol-1'].discount).toBe(0);
        expect(cartItems['cintol-2'].discount).toBe(20);
    });
});
