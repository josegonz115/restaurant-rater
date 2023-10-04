
<a name="readme-top"></a>



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/josegonz115/restaurant-rater">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Restaurant Rater</h3>

  <p align="center">
    This project is a clone of the popular business directory service and crowd-sourced review forum, Yelp. It is built using the PERN stack which includes PostgreSQL, Express, React, and Node.js.
    <br />
    <a href="https://github.com/josegonz115/restaurant-rater"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#demo">View Demo</a>
  </p>
</div>







## Features

- **CRUD Operations**: Implement full CRUD operations for managing restaurant data and reviews.
- **Search Functionality**: Search for restaurants based on various criteria.
- **Rating System**: Users can rate restaurants using a star rating system, and view average ratings.
- **Review System**: Users can write reviews for restaurants and view reviews from other users.
- **Responsive Design**: The web application is designed to be responsive for a variety of devices and screen sizes.
- **RESTful API**: Utilize RESTful API conventions for server routing to handle client requests and manage database operations.
- **Data Visualization**: Visual representation of restaurant ratings and other relevant data.
- **Error Handling**: Implement error handling to provide feedback on failed operations like incorrect data entry.

### Technologies Used

- **Backend**: Express, Node.js
- **Database**: PostgreSQL
- **Frontend**: React
- **State Management**: React Context API
- **Routing**: React Router

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="demo"></a>
## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/Ey8rF87.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [GIPHY Capture](https://giphy.com/apps/giphycapture) for macOS

<!-- GETTING STARTED -->
## Getting Started
1. **Clone the repository**:
    ```bash
    git clone https://github.com/josegonz115/restaurant-rater.git
    cd pern-yelp-clone
    ```

2. **Install dependencies**:
  
    Make sure to cd to both directories client/ and server/ and enter
    ```zsh
    npm install
    ```

3. **Setup the database**:
    - Install <a href="https://www.postgresql.org/download/">PostgreSQL</a> and create a database
    - Create a database for the project.
    - Setup the necessary tables using the provided schema file in the `database` folder.

4. **Configure environment variables**:
    - In `server/ ` create an `.env` file with your PostgreSQL connection information.
    ```.env
    PORT=0000

    PGUSER=name
    PGHOST=postgres
    PGPASSWORD=password
    PGDATABASE=database_name
    PGPORT=5432
    ```

5. **Start the server**:

    In `server/` and then `client\`
    ```bash
    npm start
    ```

6. **Visit the application**:
    - Open your web browser and visit `http://localhost:3000`.




<p align="right">(<a href="#readme-top">back to top</a>)</p>




