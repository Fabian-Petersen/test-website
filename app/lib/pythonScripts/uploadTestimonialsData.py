# Description: This script uploads the project data from "./projectsDynamoData.py" to the DynamoDB table

import boto3
import uuid
from testimonialData import entries
from botocore.exceptions import ClientError

# Initialize the DynamoDB resource
region = 'af-south-1'
dynamodb = boto3.resource('dynamodb', region_name=region)
table = dynamodb.Table('fabian-portfolio-testimonials')

# Function to insert entries into DynamoDB
def add_entries_to_dynamodb(entries):
    for entry in entries:
        try:
            entry ={
                'id': str(uuid.uuid4()),
                'name': entry['name'],
                'email': entry['email'],
                'company': entry['company'],
                'position': entry['position'],
                'message': entry['message'],
                'image': entry['image'],

            }
            table.put_item(Item=entry)
            print(f"Put item succeeded: {entry['id']}")
        except ClientError as e:
            print(f"Error adding item {entry['id']}: {e.response['Error']['Message']}")

# Call the function to add entries
add_entries_to_dynamodb(entries)