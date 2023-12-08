import http.server
import socketserver
import json

# Define the port you want to use
port = 8080  # You can change this to any available port you prefer

# Define the paths and corresponding JSON files
endpoints = {
    "/data1": "data_team1.json",
    "/data2": "data_team2.json",
    "/data3": "data_team3.json",
    "/data4": "data_team4.json",
    "/data5": "data_team5.json",
}

# Create a custom request handler that serves the JSON data based on the path
class JSONRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow cross-origin requests
        super().end_headers()

    def do_GET(self):
        # Get the path from the request
        path = self.path

        # Check if the path is in the endpoints dictionary
        if path in endpoints:
            # Load the corresponding JSON file
            with open(endpoints[path], "r") as json_file:
                data = json_file.read()

            # Send the JSON data as the response
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(data.encode())
        else:
            # If the path is not in the endpoints dictionary, return a 404 response
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'404 Not Found')

# Set up the server
with socketserver.TCPServer(("", port), JSONRequestHandler) as httpd:
    print(f"Serving at port {port}")
    httpd.serve_forever()

