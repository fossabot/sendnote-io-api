# Sendnote API
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fnitrique%2Fsendnote-io-api.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fnitrique%2Fsendnote-io-api?ref=badge_shield)


Messages API endpoint for Sendnote.io

## Configuration

Create a .env or pass thru env vars

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=production
APP_NAME=sendnote-api
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_USER=admin
DB_PASSWORD=admin
DB_DATABASE=sendnote
HASH_DRIVER=bcrypt
```

## Starting in dev

`npx start:dev`

App will be binded to port http://127.0.0.1:3333, use 0.0.0.0 as host to listen on any ip address.

## Starting in production

`docker run -dti --rm --name sendnote-api -p 3333:3333 netforce01/sendnote-io-api`


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fnitrique%2Fsendnote-io-api.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fnitrique%2Fsendnote-io-api?ref=badge_large)