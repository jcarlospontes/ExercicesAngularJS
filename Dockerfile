FROM node:14 AS frontend

# Define the working directory inside the container for the frontend
WORKDIR /app/frontend

# Copy the AngularJS project to the container
COPY . /app/frontend

# Install http-server globally
RUN npm install -g http-server

# Expose the port that the AngularJS app will run on
EXPOSE 8080

# Start the http-server to serve the AngularJS app
CMD ["http-server", "-p", "8080"]