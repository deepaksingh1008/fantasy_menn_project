
#  Fantasy Team Manager
This is a simple Fantasy Team Manager web application where users can create and manage their fantasy teams, similar to Dream11. Users can select players from a pool of available players and form a team of up to 11 players. The backend is built with Node.js, Express.js, and MongoDB, while the frontend is developed using React.


## Features
- **Create Fantasy Team**: Users can select players from a list of available players and form a team.
- **Manage Team**: Users can add and remove players from their team, with a maximum limit of 11 players.
- **Display Team Stats**: Show player details and calculate total points for the user's team.
- **Error Handling**: Basic form validation and error handling for user actions.

## Project Structure
```plaintext
.
├── backend
│   ├── controllers
│   │   └── teamController.js
│   ├── models
│   │   └── Player.js
│   │   └── Team.js
│   ├── routes
│   │   └── playerRoutes.js
│   │   └── teamRoutes.js
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── PlayerList.jsx
│   │   │   └── TeamForm.jsx
│   │   ├── App.js
│   │   └── index.js
│   └── public
├── README.md
├── package.json
└── .gitignore



Technologies Used
Backend:
Node.js: JavaScript runtime for building server-side applications.
Express.js: Web framework for building the backend APIs.
MongoDB: NoSQL database to store player and team data.
Mongoose: MongoDB ODM for managing database models and querying.
Frontend:
React: JavaScript library for building user interfaces.
CSS: Used for styling the web application.
```
## Installation

1.Clone the repository:
```bash
git clone https://github.com/your-repository/fantasy-team-manager.git
cd fantasy-team-manager/backend


```
2.Install dependencies for both the server and client:
```bash 
cd server
npm install
cd ../frontend
npm install
```
3.Set up environment variables:Create a `.env` file in the `server` directory and add the following variables:
```bash
PORT=<port-number>
MONGO_URI=<mongodb-uri>

 ```

4.Run the development server:
```bash
# In the server directory
nodemon server.js

# In the Frontend directory
npm start
 ```
 
## API Endpoints
Players
- GET /players: Retrieve all available players.
Teams
- POST /teams: Create a new team.
- GET /teams/
- Retrieve a specific team by its ID.
Usage
- Select Players: Browse the list of available players and select up to 11 players to create your fantasy team.
- Create Team: After selecting players, click "Create Team" to finalize your team.
- View Team: View your selected team, including player details and total points.


## Error Handling & Validation
- Users cannot select more than 11 players.
- Prevent adding the same player multiple times.
- Proper error messages are shown when the backend API encounters issues.


## Future Improvements
- Add user authentication for multiple users to manage their teams.
- Implement more advanced player stats and scoring algorithms.
- Enhance the UI with more detailed player and team analytics.
## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to contribute to this project.

## License

This project is licensed under the MIT License. See the LICENSE file for details.