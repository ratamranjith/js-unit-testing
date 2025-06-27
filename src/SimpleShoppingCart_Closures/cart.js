// Shopping Cart using closures
export default function shopping_cart() {
    let pList = {};

    const addItem = ({ name, quantity = 0, price = 0, discount = 0, description = "Not Available" }) => {
        if (!name) {
            return "Product name is required";
        }
        pList[name] = {
            quantity,
            price,
            discount,
            description
        };
        return `${name} added to cart.`;
    };

    const removeItem = (name) => {
        if (pList[name]) {
            delete pList[name];
            return `${name} removed from cart.`;
        }
        return `${name} not found in cart.`;
    };

    const updateItem = (name, updates) => {
        if (pList[name]) {
            pList[name] = {
                ...pList[name],
                ...updates
            };
            return `${name} updated.`;
        }
        return `${name} not found in cart.`;
    };

    const display = () => {
        return { ...pList }; // Return a copy to avoid direct mutation
    };

    // Return closure interface
    return {
        addItem,
        removeItem,
        updateItem,
        display
    };
}
