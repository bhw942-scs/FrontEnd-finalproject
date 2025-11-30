Personal Trainer Dashboard (Frontend)

This repository contains the user interface module (Front-End) implementation for the personal trainer management application. Its primary function is to interact with the REST API hosted on Heroku for the administration of clients and training sessions.

The project is built upon a solid foundation using React, TypeScript, Vite as a bundler, and a combination of Material UI (MUI) with Tailwind CSS for the user interface definition.

Key Module Features

Strict Typing: TypeScript is implemented to guarantee code integrity and robustness through static type validation, minimizing runtime errors.

Connection Management (CORS): The Proxy functionality configured in Vite is used to mitigate Cross-Origin Resource Sharing (CORS) policy restrictions during local development, facilitating smooth communication with the external API.

Data Visualization: Entities (Clients and Trainings) are presented using dynamic tables (Data Grids) that offer essential user functionalities such as sorting, pagination, and filtering.

Intuitive Navigation: The interface architecture allows for simple navigation using tabs to switch between the Clients and Trainings views.

Technologies and Dependencies

Component

Technology

Purpose

Framework

React (Functional Components, Hooks)

Foundation for building the reactive interface.

Base Language

TypeScript

Static typing and enhanced code scalability.

Build Tool

Vite

Fast development server and build optimization.

Styles/UI

Material UI (MUI) and Tailwind CSS

Library of predefined components and CSS utilities for design.

Date Handling

Day.js

Efficient processing and formatting of date and time objects.

Backend API

https://customerrestservice-atc.herokuapp.com

Remote data source for clients and trainings.

Repository Structure

The project organization adheres to the best practices of a React/Vite environment:

├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CustomerList.jsx
│   │   ├── NavBar.jsx
│   │   └── TrainingList.jsx
│   ├── services/
│   │   ├── customerService.js (Client API call implementation)
│   │   └── trainingService.js (Training API call implementation)
│   ├── App.css
│   ├── App.jsx (Main component and routing/navigation)
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js (CRITICAL Proxy Configuration File)
└── README.md


Critical Configuration: API Connection Proxy

The vite.config.ts file is essential. It contains the proxy configuration that maps local requests initiated by the application (/api/...) to the remote Heroku server domain. This technique is fundamental for avoiding CORS blocks in development environments and ensuring the correct data acquisition.

Installation and Execution Procedure

Follow the instructions below to set up the environment and deploy the application in local mode:

1. System Requirements

It is imperative to have Node.js and a package manager (npm or yarn) installed in your development environment.

2. Source Code Acquisition

Clone the GitHub repository and navigate to the project directory:

git clone <YOUR_REPOSITORY_URL>
cd frontend-finalproject # or the directory name


3. Dependency Installation

Install all project dependencies specified in package.json:

npm install
# Alternatively with yarn:
# yarn install


4. Development Server Execution

Start the Vite development server. This command activates the application and the configured proxy:

npm run dev
# Alternatively with yarn:
# yarn dev


The application will be accessible via the local URL indicated by Vite, typically http://localhost:5173/.

