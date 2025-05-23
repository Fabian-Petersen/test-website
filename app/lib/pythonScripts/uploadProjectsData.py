# Description: This script uploads the project data from "./projectsDynamoData.py" to the DynamoDB table

import boto3 # type: ignore
import uuid
from projectsDynamoData import entries
from botocore.exceptions import ClientError # type: ignore

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
                'thumbnailDescription': entry['thumbnail description'],
                'image': entry['image'],
                'websiteLink': entry['websiteLink'],
                'githubLink': entry['githubLink'],
                'singlePage': {
                    'title': entry['singlePage']['title'],
                    'aim': entry['singlePage']['aim'],
                    'skillsApplied': entry['singlePage']['skills applied'],
                    'technologies': entry['singlePage']['technologies'],
                    'architecture': entry['singlePage']['architecture'],
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