# Lizingo Sistema (Leasing System)

This is a simple full-stack leasing application that allows users to fill out a leasing request form, review submitted requests, and simulate moderator-based approval or rejection.

## Features

- Fill and submit a leasing request form
- View all submitted requests
- Cancel requests manually
- Simulated moderation: within 3–5 seconds, each request is automatically approved (**Priimta**) or rejected (**Atšaukta**) to simulate real-time review

## Tech Stack

### Backend
- **.NET 8**
- **Entity Framework Core**
- **MSSQL Server**

### Frontend
- **React**
- **Bootstrap** for styling

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Node.js](https://nodejs.org/) and npm

### Backend Setup

1. Navigate to `Backend/` folder
2. Add your connection string in `appsettings.json`
3. Run migrations:
   `dotnet ef database update`
4. Start the backend:
   `dotnet run`

### Frontend Setup

1. Navigate to `Frontend/` folder
2. Install dependencies:
   `npm install`
3. Start the frontend:
   `npm start`

## Demo

After submitting a form, wait 3-5 seconds to see the simulated status update in the request list.


Created as a side project by Dovydas Girskas
