# isItGayApi

<u>List of Dependencies: </u>

- jwt
- mongodb
- mongoose
- bcrypt
- passport

# Models

![User Model](https://imgur.com/0TaBt6Y.png)

![Culture Model](https://imgur.com/nF4ZwDd.png)

# Routes

|Name of Route   |Request Method   |Endpoint   |Result   |
|---|---|---|---|
|Register   |Post   |/auth/register   |creates new user   |
|Login   |Post   |/auth/register    |creates Json Web Token   |
|FindAllCultures   |Get   |/culture   |returns list of all items   |
|FindCulture   |Get   |/culture/:id   |returns item with matching id   |
|createCulture   |Post   |/culture   |creates a new item, returns item or confirmation   |
|updateCulture   |Put   |/culture/:id   |Updated item with matching ID   |
|deleteCulture   |Delete   |/culture/:id   |Deletes item with matching ID   |

[Click Here](https://isitgayapi.herokuapp.com/culture) to see deployed heroku app.