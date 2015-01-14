# Roman Numeral Converter

## Tests

Run the tests with `node test`.

## Web Service

Install dependencies with `npm install`, then run `node server.js` to start the server. The service will be available at [http://localhost:8000/](http://localhost:8000/).

### Endpoints

#### `/generate/:value`

Generate a roman numeral from a decimal value.

```
GET /generate/6

200 OK
{
    "value": 6
}
```

```
GET /generate/6000

400 Bad Request
{
    "message": "Unable to convert numbers larger than 3999"
}
```

#### `/parse/:value`

Parse a roman numeral and return a decimal value.

```
GET /parse/CVI

200 OK
{
    "value": 106
}
```

```
GET /parse/potato

400 Bad Request
{
    "message": "Invalid roman numeral supplied"
}
```
