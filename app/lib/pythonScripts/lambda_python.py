import json
import boto3
import uuid
from botocore.exceptions import ClientError

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb', region_name='af-south-1')
dynamodb_table = dynamodb.Table('test-dynamoDB')

def lambda_handler(event, context):
    # Print the incoming event for debugging
    print('Request event:', event)

    # Only allow POST requests to '/contacts' path
    if event.get('httpMethod') == 'POST' and event.get('path') == '/contacts':
        try:
            # Parse the request body
            body = json.loads(event['body'])
            
            # Build the item to insert
            item = {
                'id': str(uuid.uuid4()),  # Unique ID for each contact
                'email': body['email'],
                'username': body['username'],
                'message': body['message']
            }
            
            # Put item into DynamoDB table
            dynamodb_table.put_item(Item=item)
            
            # Success response
            return build_response(200, {'message': 'Contact saved successfully', 'item': item})
        
        except ClientError as e:
            print('DynamoDB ClientError:', e)
            return build_response(500, {'error': 'Could not save contact'})
        
        except Exception as e:
            print('Error:', e)
            return build_response(400, {'error': 'Invalid request data'})
    
    # Handle other paths or methods
    return build_response(404, {'error': 'Not Found'})

def build_response(status_code, body):
    return {
        'statusCode': status_code,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps(body)
    }