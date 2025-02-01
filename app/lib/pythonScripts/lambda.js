// const AWS = require("aws-sdk");
import AWS from "aws-sdk";
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    console.info("event data: " + JSON.stringify(event));

    switch (event.httpMethod + " " + event.resource) {
      //Delete a single item by id
      case "DELETE /projects/{id}":
        await dynamo
          .delete({
            TableName: "test-dynamoDB",
            Key: {
              id: event.pathParameters.id,
            },
          })
          .promise();
        body = `Deleted item ${event.pathParameters.id}`;
        break;

      //Get a single item by id
      case "GET /projects/{id}":
        body = await dynamo
          .get({
            TableName: "test-dynamoDB",
            Key: {
              id: event.pathParameters.id,
            },
          })
          .promise();
        break;

      //Get all items in the table
      case "GET /projects":
        body = await dynamo.scan({ TableName: "test-dynamoDB" }).promise();
        break;

      //Put a single item in the table
      case "PUT /projects":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "fabian-portfolio-projects",
            Item: {
              id: requestJSON.id,
              price: requestJSON.price,
              name: requestJSON.name,
            },
          })
          .promise();
        body = `Put item ${requestJSON.id}`;
        break;

      //Post a contact details to the table
      case "POST /contacts":
        let requestPOST_JSON = JSON.parse(event.body);
        await dynamo
          .post({
            TableName: "test-dynamoDB",
            Item: {
              username: requestPOST_JSON.username,
              email: requestPOST_JSON.email,
              message: requestPOST_JSON.message,
            },
          })
          .promise();
        body = `Post item ${requestPOST_JSON.email}`;
        break;

      //If no route found output message with all even
      default:
        throw new Error(
          `Unsupported route: "${event.httpMethod + " " + event.resource + " - EVENT: " + JSON.stringify(event)}"`
        );
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
