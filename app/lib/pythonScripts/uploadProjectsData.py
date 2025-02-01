# Description: This script uploads the project data from "./projectsDynamoData.py" to the DynamoDB table

import boto3
import uuid
from projectsDynamoData import entries
from botocore.exceptions import ClientError

# Initialize the DynamoDB resource
region = 'af-south-1'
dynamodb = boto3.resource('dynamodb', region_name=region)
table = dynamodb.Table('fabian-portfolio-projects')

# Function to insert entries into DynamoDB
def add_entries_to_dynamodb(entries):
    for entry in entries:
        try:
            entry ={
                'id': str(uuid.uuid4()),
                'projectTitle': entry['projectTitle'],
                'language': entry['language'],
                'category': entry['category'],
                'description': entry['description'],
                'image': entry['image'],
                'websiteLink': entry['websiteLink'],
                'githubLink': entry['githubLink'],
                'singlePage': {
                    'title': entry['singlePage']['title'],
                    'aim': entry['singlePage']['aim'],
                    'description': entry['singlePage']['description'],
                    'skills': entry['singlePage']['skills'],
                    'images': entry['singlePage']['images'],
                    'challenges': entry['singlePage']['challenges'],
                }
            }
            table.put_item(Item=entry)
            print(f"Put item succeeded: {entry['id']}")
        except ClientError as e:
            print(f"Error adding item {entry['id']}: {e.response['Error']['Message']}")

# Call the function to add entries
add_entries_to_dynamodb(entries)