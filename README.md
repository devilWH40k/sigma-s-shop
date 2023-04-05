# Organick

It is a simple web site for shoping(imitation) organick food made for learning purposes.

## Used technologies

- [Next.js][next] - main fullstack framework
- [React.js][react] - as a component builder
- [Redux/toolkit][redux] - as a state container for app
- [Redux Persist][redux_persist] - to synchronize redux store with local storage
- [MongoDB (Mongoose as ODM)][mongo] - database for products and orders

## System requirments

- [Node.js][node] 14.6.0 or newer
- MacOS, Windows (including WSL), and Linux are supported
- [MongoDB][mongo_installation] should be installed in your local machine

## Starting a dev server

1. Clone the repository and enter the project folder:

```sh
$ cd sigma-s-shop
```

2. Create **.env.local\_** file in here with:

```sh
MONGODB_URI = <your mongo db uri> or "mongodb://localhost:27017"
```

3. Install all the requirements:

```sh
$ npm i
```

4. Run the following script to fill the db:

```sh
$ node .\src\mongo\utils\formDB.js
```

**Note:** If you've done everything corectly you should see the message: "Added 16 products to the database"

5. Start the development server (It will be available at http://localhost:3000):

```sh
$ npm run dev
```

6. Have fun xD

[next]: https://nextjs.org/docs
[react]: https://react.dev/learn
[redux]: https://redux.js.org/introduction/getting-started
[redux_persist]: https://github.com/rt2zz/redux-persist
[sass]: https://sass-lang.com
[node]: https://nodejs.org/uk
[mongo]: https://www.mongodb.com
[mongo_installation]: https://www.mongodb.com/docs/manual/installation/
