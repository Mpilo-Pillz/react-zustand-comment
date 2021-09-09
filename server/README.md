# Endpoints and Default Data

By default, the database has been pre-populated with a set of organizations, comments and members.

**Available organizations** to query from:
- **fsociety**
- **ecorp**

### Available Endpoints

**[GET] /orgs/{orgName}/comments**
```bash
curl -i /orgs/fsociety/comments

HTTP/1.1 200 OK
BODY:
[
  {
    "deleted": false,
    "_id": "5d61050a854b8e001cb96896",
    "comment": "i miss qwerty...",
    "org": "fsociety",
    "createdAt": "2019-08-24T09:36:10.846Z",
    "updatedAt": "2019-08-24T09:36:10.846Z",
    "__v": 0
  },
  {
    "deleted": false,
    "_id": "5d61050a854b8e001cb96897",
    "comment": "where is darlene?",
    "org": "fsociety",
    "createdAt": "2019-08-24T09:36:10.846Z",
    "updatedAt": "2019-08-24T09:36:10.846Z",
    "__v": 0
  }
]
```
**[POST] /orgs/{orgName}/comments**
```bash
curl -d '{"comment": "Bonsoir!"}' \
-H "Content-Type: application/json" \
-X POST http://localhost:1337/orgs/ecorp/comments

HTTP/1.1 200 OK
```

**[DELETE] /orgs/{orgName}/comments**
```bash
curl -i -X DELETE http://localhost:1337/orgs/fsociety/comments

HTTP/1.1 200 OK
```

**[GET] /orgs/{orgName}/members**
```bash
curl -i http://localhost:1337/orgs/fsociety/members

HTTP/1.1 200 OK
BODY:
[
  {
    "avatar": "https://i.pravatar.cc/300",
    "followers": 33,
    "following": 11,
    "_id": "5d61050a854b8e001cb96890",
    "email": "praveen@fsociety.com",
    "org": "fsociety",
    "createdAt": "2019-08-24T09:36:10.811Z",
    "updatedAt": "2019-08-24T09:36:10.811Z",
    "__v": 0
  },
  {
    "avatar": "https://i.pravatar.cc/300",
    "followers": 18,
    "following": 7,
    "_id": "5d61050a854b8e001cb96891",
    "email": "darlene@fsociety.com",
    "org": "fsociety",
    "createdAt": "2019-08-24T09:36:10.811Z",
    "updatedAt": "2019-08-24T09:36:10.811Z",
    "__v": 0
  },
  {
    "avatar": "https://i.pravatar.cc/300",
    "followers": 7,
    "following": 21,
    "_id": "5d61050a854b8e001cb9688f",
    "email": "gregtandiono@fsociety.com",
    "org": "fsociety",
    "createdAt": "2019-08-24T09:36:10.810Z",
    "updatedAt": "2019-08-24T09:36:10.810Z",
    "__v": 0
  }
]
```


