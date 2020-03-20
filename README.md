# GoBarber-NodeJs-Rocketseat

A Software as a Service to provide a scheduling between barbers and clients.

- [GoBarber-NodeJs-Rocketseat](#gobarber-nodejs-rocketseat)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)


## Usage

The first step is to create your account, then you can login and choose a barber, check his schedule and make an appointment.

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](http://docs.sequelizejs.com/)
- [Postgres](https://www.postgresql.org/)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs/)
- [Multer](https://github.com/expressjs/multer/)
- [Moment.JS](https://momentjs.com/)
- [Eslint-Airbnb](https://eslint.org/)
- [Nodemon](https://nodemon.io/)

## Installation

Clone the project with

```sh
git clone https://github.com/alsdede/gobarber
```

Get in the path project
server /api
web /web
app /app
then install the dependencies with:

```sh
yarn
```

Then, you have to create your postgres database (Or another if you want) and fill your own fields in .env file.

Now, you have to create tables with the command:

```sh
yarn sequelize db:migrate
```

Start development server:

```sh
yarn dev
```


