const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  await dynamo.put({
    TableName: 'Connections',
    Item: { connectionId: event.requestContext.connectionId }
  }).promise();
  return { statusCode: 200, body: 'Connected' };
};
