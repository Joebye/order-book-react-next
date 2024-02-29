# Scouterz Challenge

Welcome to the Scouterz Coding Challenge. This challenge is designed to test your full-stack development skills, including debugging, database management, and feature development. You will have up to 4 hours to complete this challenge. Please ensure your work is submitted before then, as you will lose access to this repo at that time.

We recommend working through the challenges in order and creating a PR for each challenge separately.

## Setup

Before starting the challenge, ensure your development environment is properly set up.

### Prerequisites

- Ensure you have `pnpm` and `node` installed on your machine.
- Make sure `PostgreSQL` is installed and running locally on your computer. You should have administrative access to create databases and manage schemas.

### Installation

First, install the project dependencies using `pnpm`:

```bash
pnpm install
```

Next, prepare your local development environment:

```bash
pnpm bootstrap
```

This `bootstrap` command performs several setup steps:
- Generates necessary database migrations.
- Creates a new database called `scouterzChallenge` in your local PostgreSQL instance.
- Runs migrations to create the required tables in the `scouterzChallenge` database.
- Seeds the database with some initial data for testing.

### Configuration

Ensure your local database credentials are correctly set up in the application's configuration file or environment variables, as required by the `bootstrap` script. Refer to the `.env.sample` file for details.

## Running the App

Start the development server with the following command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the order book page. This page displays transaction data fetched from your local database.

## The Challenge

Your task is to work through several main parts of this full-stack development challenge:

### 1 - Fix Some Bugs

We've intentionally introduced a few bugs in the frontend code: Look for issues preventing the order book from rendering correctly. Improve the performance and reliability of the code to follow best practices for React/Next.js. Make sure proper error handling is in place.

Create a new commit for each bug you find. Include all your bug fix commits in a pull request with details about what you fixed and improved.

### 2 – Filtering

Enhance the application by adding a new feature:
- Implement a feature that allows users to filter the order book by order status. They should be able to select status from a dropdown menu and then have the table update automatically to show filtered orders.
- This feature should have both frontend and backend components, including UI elements and the necessary API routes and/or updates to the order api to handle filtering.

### 3 - Update the database

Modify the existing database schema:
- Add a new column to the orders table. Display the new column data on the orders page. 
- Ensure all changes are applied via migrations. Update any scripts or documentation as necessary for other developers to follow along.

### 4 - Add ability to create orders

Create a new page `/create` that is linked from the homepage. It should enable users to create a new entry in the order book. It should be a simple form that takes in relevant data for the order table, including the new column you added.

## Submitting Your Solution

Once you have completed the challenge, follow these steps to submit your solution:

1. **Create separate Pull Requests**: For each of the parts of the challenge, add your commits to a new branch and open a pull request against the main branch of the repository. Include a brief description of the changes you've made and any notes on your implementation.

1. **Notify Your Contact**: Send an email to your challenge contact person with a link to the pull request. Include any additional comments or instructions needed to review your solution.

Thank you for participating in the Scouterz Coding Challenge. We look forward to reviewing your solution!