var aws = require('aws-sdk');
var ddb = new aws.DynamoDB.DocumentClient();
const TABLE_NAME = 'User1-jrjy7p6utrc7dpg63p3wsgozqq-dev'

exports.handler = async (event, context) => {
    console.log( event.request.userAttributes,' event.request.userAttributes')
  let DBItem = {
    id: event.request.userAttributes.sub,
    email: event.request.userAttributes.email,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),};
  try {
    await ddb
      .put({
        TableName: TABLE_NAME,
        Item: DBItem
      })  
      .promise();
    console.log('Success');
  } catch (err) {
    console.log('Error', err);
  }
  console.log('Success: Everything executed correctly');
  context.done(null, event);
};