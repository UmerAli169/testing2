const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    const { productId, quantity } = event.arguments.input;

    if (!productId || !quantity) {
        throw new Error("Missing required fields: productId or quantity");
    }

    const params = {
        TableName: 'AddProduct-ecyypbtekzgwllwdy7owgfb35q-dev', // Make sure this is the correct table name
        Key: { id: productId },
    };

    try {
        // Fetch product from DynamoDB
        const product = await docClient.get(params).promise();

        if (!product.Item) {
            throw new Error(`Product with ID ${productId} not found`);
        }

        const price = product.Item.price;
        if (typeof price !== 'number') {
            throw new Error(`Price for product with ID ${productId} is not valid`);
        }

        const totalPrice = price * quantity;

        console.log(`Total Price for product ${productId}: $${totalPrice}`);

        return totalPrice;
    } catch (error) {
        console.error("Error fetching product price:", error);
        throw new Error(`Error fetching product price for ID ${productId}: ${error.message}`);
    }
};
