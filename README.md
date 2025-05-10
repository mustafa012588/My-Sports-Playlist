
# My Sports Playlist

## Introduction
My Sports Playlist is a project designed to allow users to add sports matches to their personal playlist. The application is composed of two main parts: a frontend developed with Angular, and a backend developed using .NET Core.

## Technologies Used
- **Frontend**: Angular
- **Backend**: .NET Core
- **Database**: SQL Server
- **Authentication**: JWT

## Installation and Setup

### 1. Setting up the Backend
- Ensure you have .NET Core installed.
- Modify the connection settings in the `appsettings.json` file.
- To install the required packages, run:
  ```bash
  dotnet restore
  ```
- To run the backend:
  ```bash
  dotnet run
  ```

### 2. Setting up the Frontend
- Ensure you have Node.js installed.
- To install the required packages for the frontend:
  ```bash
  npm install
  ```
- To run the frontend:
  ```bash
  ng serve
  ```

## Project Structure
- **Backend**
  - `Controllers`: Contains the API files.
  - `Models`: Contains the models used in the application.
  - `Data`: Contains the database context.

- **Frontend**
  - `src/app`: Contains the components and services.

## API

### Register a New User
**POST** `/api/Auth/register`
- Request body:
  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```

### Login
**POST** `/api/Auth/login`
- Request body:
  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```

### Add Match to Playlist
**POST** `/api/Playlist/{matchId}`
- Request body:
  ```json
  {
    "matchId": 1
  }
  ```

##  Developed by

**Mostafa Alaa**  
Email: [mustafa012588@gmail.com]  
GitHub: [https://github.com/mustafa012588/Todo-Management]
