import base64

# Read and encode the image file to base64
with open('project-3.jpeg', 'rb') as image_file:
    encoded_string = base64.b64encode(image_file.read()).decode('utf-8')

# Print or save the encoded string to use in the test event
print('base64 encoded image:', encoded_string)