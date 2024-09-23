# MERN Job Board

This is a job board application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Dependencies

Make sure you have the following dependencies installed:

- Node.js (> v18)
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/adiela/mern-jobboard.git
    cd mern-jobboard
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend/
    npm install
    ```

## Running the Application Locally

1. Create environment variables file
    ```bash
    touch .env
    ```

1. Add environment variables to env file
    ```bash
    MONGO_URI=""
    appName="" // only needed if running you database on Atlas
    ```

2. Start the server:
    ```bash
    npm run dev
    ```

3. Start the client:
    ```bash
    cd frontend/
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`

## Using MongoDB Atlas

If you prefer to use MongoDB Atlas, follow these steps:

1. Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas) and sign up for an account.
2. Create a new cluster.
3. In the cluster details, click on "Connect" and follow the instructions to whitelist your IP address and create a MongoDB user.
4. Choose "Connect your application" and copy the connection string.
5. Replace the `MONGO_URI` in your environment variables with the connection string you copied.

## License

This project is licensed under the MIT License.