# import base64
# import boto3
# import uuid
# import json
# from base64 import b64decode
# from botocore.exceptions import ClientError

# def lambda_handler(event, context):
#     print(event)  # For debugging

#     # Initialize the DynamoDB resource
#     region = 'af-south-1'
#     dynamodb = boto3.resource('dynamodb', region_name=region)
#     s3 = boto3.client('s3', region_name=region)
    
#     table = dynamodb.Table('fabian-portfolio-projects')
#     s3_bucket = 'fabian-portfolio-project-images'
    
#     # Parse the JSON body to get the item details
#     try:
#         # Decode the JSON string from 'body'
#         data = json.loads(event['body']) 
        
#         # Get metadata for database
#         id = str(uuid.uuid4())
#         title = data['projectTitle']
#         language = data['language']
#         project_type = data['projectType']
#         description = data['description']
#         website_link = data['websiteLink']
#         github_link = data['githubLink']
#         single_page = data['singlePage']
        
#         # Process the image
#         image_data = b64decode(data['image'])
#         image_name = f"{id}.jpg"
        
# #       # Upload image to S3
#         s3.put_object(
#         Bucket=s3_bucket,
#         Key=image_name,
#         Body=image_data,
#         ContentType='image/jpeg'
# )
#         image_url = f"https://{s3_bucket}.s3.amazonaws.com/{image_name}"
        
#         # Prepare item for DynamoDB from metadata
#         item = {
#             'id': id,
#             'projectTitle': title,
#             'language': language,
#             'projectType': project_type,
#             'description': description,
#             'image': image_url,
#             'websiteLink': website_link,
#             'githubLink': github_link,
#             'singlePage': single_page
# }
        
#     except json.JSONDecodeError as e:
#         return {
#             'statusCode': 400,
#             'body': f"Invalid JSON format: {str(e)}"
#         }

#     # Ensure all required fields are provided
#     if not all(item.values()):
#         return {
#             'statusCode': 400,
#             'body': 'POST failed, missing required item attributes for the projects table'
#         }
    
#     try:
#         # Add the item to the DynamoDB table
#         response = table.put_item(Item=item)
        
#         # Return success response
#         return {
#             'statusCode': 200,
#             'body': json.dumps({'message': 'Item added successfully', 'project_id': id}),
#             'response': response
#         }
        
#     except ClientError as e:
#         # Return error response if there's an exception
#         return {
#             'statusCode': 500,
#             'body': f"Error adding item: {e.response['Error']['Message']}"
#         }
        
    