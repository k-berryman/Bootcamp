# Hacker News Clone
I'm including all sample tokens & usernames, because this is just a play/sample/fake app

## Hack or Snooze API
Created by Elie Schoppik  -- https://hackorsnoozev3.docs.apiary.io/# 
A RESTful JSON API with users and stories. Reading stories and creating users don't require auth -- other endpoints do.

----
Sample GET request to get an array of stories
![GET Request for stories](Pics/StoryReqGET.png)

---
Now, we sign up & get our token. 
POST request to `/signup`
![Sign Up POST Request](Pics/SignupPOST.png)

This is our auth token!

    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkthaXRsaW5Mb3Zlc0RvZ3MiLCJpYXQiOjE2NDE3NDYxOTR9.sZQikydhXOYzJqU_FHCB5bphpBJto5Tvd9X8xyp3rNU"


In future requests, place the token in either...

 - The query string `/users/test?token=eyfasf` for GET requests
 - In the request body `"token": "eyfasf"` for POST requests

---
Let's create a new story
We use our token to create a POST request to `/stories`
![New Story POST Request](Pics/NewStoryPOST.png)

### INTRODUCTION

This API is similar to HackerNews. This is a RESTful JSON API with two key resources:  **users**  and  **stories**. All endpoints require authentication using JSON Web Tokens (JWT), with the exception of reading stories and creating users, which are open to the public.

----------

## Quickstart

#### 1. First, make a cURL GET request to get an array of stories.

No authentication is required for this endpoint.

**Request**

`curl -i https://hack-or-snooze-v3.herokuapp.com/stories`

**Response**

```
{
  "stories": [
    {
      "author": "Elie Schoppik",
      "createdAt": "2018-11-14T01:36:12.710Z",
      "storyId": "991b95a0-507f-472e-9f94-e3bd4b6fe882",
      "title": "Four Tips for Moving Faster as a Developer",
      "updatedAt": "2018-11-14T01:36:12.710Z",
      "url": "https://www.rithmschool.com/blog/developer-productivity",
      "username": "test"
    }
  ]
}

```

#### 2. Next, let's sign up and get a token.

**Request**

This is a  [POST request to /signup](https://hackorsnoozev3.docs.apiary.io/#reference/0/signup).

```
curl -i \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"user":{"name":"Test User","username":"test","password":"foo"}}' \
      https://hack-or-snooze-v3.herokuapp.com/signup

```

**Response**

```
{
  "token": "YOUR_TOKEN_SHOWS_UP_HERE",
  "user": {
    "createdAt": "2018-11-14T01:35:07.974Z",
    "favorites": [],
    "name": "Test User",
    "stories": [],
    "updatedAt": "2018-11-14T01:35:07.974Z",
    "username": "test"
  }
}

```

We will include the  `token`  for future requests that require authentication.

#### 3. Create a New Story

Using the token, make a POST request to  `/stories`.

For all future requests, the token can be placed either:

-   in the query string (for  `GET`  requests, e.g.  `/users/test?token=eyfasf...`)
    
-   or in the request body (for  `POST`  and  `PATCH`  requests, e.g.  `"token": "eyfasf"`)
    

**Request**

For this request, we will place the token in the body, since it is a  [POST request to /stories](https://hackorsnoozev3.docs.apiary.io/#reference/0/stories).

```
curl -i \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"token":"PASTE_YOUR_TOKEN_HERE", "story": {"author":"Elie Schoppik","title":"Four Tips for Moving Faster as a Developer", "url": "https://www.rithmschool.com/blog/developer-productivity"} }' \
      https://hack-or-snooze-v3.herokuapp.com/stories

```

**Response**

```
{
  "story": {
    "author": "Elie Schoppik",
    "createdAt": "2018-11-14T01:36:12.710Z",
    "storyId": "991b95a0-507f-472e-9f94-e3bd4b6fe882",
    "title": "Four Tips for Moving Faster as a Developer",
    "updatedAt": "2018-11-14T01:36:12.710Z",
    "url": "https://www.rithmschool.com/blog/developer-productivity",
    "username": "test"
  }
}

```

See the  [Reference section](https://hackorsnoozev3.docs.apiary.io/#reference/0/auth)  below for fully-detailed resource documentation, including which routes are protected.

----------

## Resource Structure

### Collections

The API provides access to the following collections. Both collections have full CRUD (Create, Read, Update, Delete) operations.

#### Users

-   Collection Endpoint:  `/users`
    
-   Singular Endpoint:  `/users/{username}`
    
-   Attributes:
    
    -   name
    -   username
    -   password
    -   stories (a list of stories that the user posted)
    -   favorites (a list of stories that the user favorited)
-   Token Required for all users endpoints.
    

#### Stories

-   Collection Endpoint:  `/stories`
    
-   Singular Endpoint:  `/stories/{storyId}`
    
-   Attributes:
    
    -   author
    -   title
    -   url
    -   username (who the story was posted by)
    -   storyId (autogenerated upon creating a story)
-   Token Required for:  `POST /stories`,  `PATCH /stories/{storyId}`,  `DELETE /stories/{storyId}`
    

**Posting a New Story**:

Send a  `POST`  request to  `/stories`  endpoint.

Example Payload:

```
{
    "token": "YOUR_TOKEN_HERE",
    "story": {
        "author": "Matt Lane", 
        "title": "The best story ever",
        "url": "http://google.com"
    }
}
```

---
## Structure
The API provides access to the following collections. Both collections have full CRUD (Create, Read, Update, Delete) operations.

#### Users

-   Collection Endpoint:  `/users`
    
-   Singular Endpoint:  `/users/{username}`
    
-   Attributes:
    
    -   name
    -   username
    -   password
    -   stories (a list of stories that the user posted)
    -   favorites (a list of stories that the user favorited)
-   Token Required for all users endpoints.

#### Stories

-   Collection Endpoint:  `/stories`
    
-   Singular Endpoint:  `/stories/{storyId}`
    
-   Attributes:
    
    -   author
    -   title
    -   url
    -   username (who the story was posted by)
    -   storyId (autogenerated upon creating a story)
-   Token Required for:  `POST /stories`,  `PATCH /stories/{storyId}`,  `DELETE /stories/{storyId}`

---
