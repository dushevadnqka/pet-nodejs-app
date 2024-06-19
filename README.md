# Vanila Node.js Pets App

This is a simple Node.js application built with Express for testing purposes. It allows you to manage pets.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- Docker

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/vanila-nodejs-pets-app.git
    ```

2. Install the dependencies:

    ```bash
    cd vanila-nodejs-pets-app
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

4. Access the application in your browser at `http://localhost:3000`.

## Deployment

To deploy the application using Docker, follow these steps:

1. Build the Docker image:

    ```bash
    docker build -t your-docker-tag .
    ```

2. Push the Docker image to a container registry:

    ```bash
    docker push your-docker-tag
    ```

3. Update the Helm chart values file (`values.yaml`) with the new Docker tag.

4. Deploy the application using Helm:

    ```bash
    helm install your-release-name your-helm-chart
    ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
