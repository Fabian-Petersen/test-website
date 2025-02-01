import boto3
from contactDynamoData import entries
from botocore.exceptions import ClientError

# Initialize the DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('fabian-portfolio-contacts-mock-data')

# Function to insert entries into DynamoDB
def add_entries_to_dynamodb(entries):
    for entry in entries:
        try:
            response = table.put_item(Item=entry)
            print(f"Put item succeeded: {entry['id']}")
        except ClientError as e:
            print(f"Error adding item {entry['id']}: {e.response['Error']['Message']}")

# Call the function to add entries
add_entries_to_dynamodb(entries)