# user-community-dashboard


## Overview

This project is a simple backend service built using **Node.js and Express** to simulate a basic **User & Community Dashboard**. It demonstrates REST API design, modular code structure, in-memory data handling, basic error handling, and unit testing.

This project was built as part of a **Node.js Junior Developer (Intern) assessment**.

---

## Tech Stack

* Node.js (v18+)
* Express.js
* Jest (Testing)
* Supertest (API testing)
* MongoDB (connected, but core logic uses in-memory data as per requirement)

---

## Project Structure

```
user-community-dashboard/
├── index.js
├── routes/
│   ├── users.routes.js
│   └── communities.routes.js
├── controllers/
│   ├── users.controller.js
│   └── communities.controller.js
├── utils/
│   └── findCommonMembers.js
├── tests/
│   ├── users.test.js
│   └── findCommonMembers.test.js
├── package.json
└── README.md
```

---

## In-Memory Data Models

### Users

```js
[
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "Member" }
]
```

### Communities

```js
[
  { id: 1, name: "Developers Hub", members: [1, 2] }
]
```

> Communities are predefined mock data and are **not created dynamically**, as per task requirements.

---

## API Endpoints

### 1. Health Check

**GET /**

```json
{
  "message": "Server is running successfully"
}
```

---

### 2. Get All Users

**GET /api/users**

**Response**

```json
[
  { "id": 1, "name": "Alice", "role": "Admin" },
  { "id": 2, "name": "Bob", "role": "Member" }
]
```

---

### 3. Create User

**POST /api/users**

**Request Body**

```json
{
  "name": "Charlie",
  "role": "Member"
}
```

**Response (201)**

```json
{
  "id": 3,
  "name": "Charlie",
  "role": "Member"
}
```

---

### 4. Get Community Details

**GET /api/communities/:id**

**Response**

```json
{
  "id": 1,
  "name": "Developers Hub",
  "members": [
    { "id": 1, "name": "Alice", "role": "Admin" },
    { "id": 2, "name": "Bob", "role": "Member" }
  ]
}
```

---

### Error Handling

* `400 Bad Request` → Invalid input
* `404 Not Found` → Invalid endpoint or resource not found

---

## DSA Utility Function

### findCommonMembers(arr1, arr2)

Returns common user IDs between two arrays.

**Example**

```js
findCommonMembers([1, 2], [2, 3]); // [2]
```

---

## Testing

### Run Tests

```bash
npm test
```

### Test Coverage

* Utility function (`findCommonMembers`)
* API endpoint (`GET /api/users`)

All tests pass successfully using **Jest** .

---

## How to Run the Project

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Server

```bash
npm start
```

Server runs on:

```
http://localhost:4000
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/user_community_db
```

---

## Time Taken

**< 60 minutes>**

---

## Notes

* The project follows the exact requirements provided.
* No database CRUD logic is used for users or communities (in-memory only).
* MongoDB is connected to demonstrate backend environment setup.

---

## Author

**<Chethan M P>**
