# Test Task React

## About the Project

This is a sample React application deployed on GitHub Pages. The app includes basic navigation and pages for signing in and out.

## Installation

To get started with the project, follow these steps:

### Option 1: Local Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vladdlevshuk/test-task-react.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd test-task-react
    ```

3. **Install dependencies:**

    If you are using `npm`:

    ```bash
    npm install
    ```

    Or if you are using `yarn`:

    ```bash
    yarn install
    ```

4. **Start the application:**

    If you are using `npm`:

    ```bash
    npm start
    ```

    Or if you are using `yarn`:

    ```bash
    yarn start
    ```

    This will open the application in your default web browser.

### Option 2: Running with Docker

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vladdlevshuk/test-task-react.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd test-task-react
    ```

3. **Build the Docker image:**

    ```bash
    docker build -t test-task-react .
    ```

4. **Run the Docker container:**

    ```bash
    docker run -p 3000:3000 test-task-react
    ```

    This will start the application in a Docker container, and you can access it by navigating to `http://localhost:3000` in your web browser.

## Deployment

You can view the deployed application at [https://vladdlevshuk.github.io/test-task-react](https://vladdlevshuk.github.io/test-task-react).
