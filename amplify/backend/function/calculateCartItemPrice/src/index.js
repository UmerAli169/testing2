const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    const { productId, quantity } = event.arguments.input;

    // Ensure productId and quantity are provided
    if (!productId || !quantity) {
        throw new Error("Missing required fields: productId or quantity");
    }

    const params = {
        TableName: 'AddProduct-ecyypbtekzgwllwdy7owgfb35q-dev', // Ensure the correct table name
        Key: { id: productId },
    };

    try {
        // Fetch product from DynamoDB
        const product = await docClient.get(params).promise();

        if (!product.Item) {
            throw new Error(`Product with ID ${productId} not found`);
        }

        // Use discounted price if available, otherwise use regular price
        const price = product.Item.discountedPrice || product.Item.price;

        // Ensure the price is a valid number
        if (typeof price !== 'number') {
            throw new Error(`Price for product with ID ${productId} is not valid`);
        }

        // Calculate the total price based on quantity
        const totalPrice = price * quantity;

        console.log(`Total Price for product ${productId}: $${totalPrice}`);

        // Return price information and total price
        return {
            price: price, // Return the individual price (discounted or regular)
            totalPrice: totalPrice, // Return the total price based on quantity
        };
    } catch (error) {
        console.error("Error fetching product price:", error);
        throw new Error(`Error fetching product price for ID ${productId}: ${error.message}`);
    }
};
