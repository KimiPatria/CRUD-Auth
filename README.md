# CRUD AUTH APP

A CRUD app that demonstrates the basic function of CRUD, using MongoDB database. This app also utilizes an authentication method with either Google or Github.

## Installation

Install NodeJS and npm.

Install dependencies on the backend folder

```bash 
npm i express express-session mongoose mongodb passport cors dotenv nodemon
```

For the auth function of Google and Github, install the following

```bash
npm i passport-google-oauth20 passport-github2
```

## How to use

The UI is straightforward with functional buttons as such:

- Login: Go to login page
- Logout: Go to logout page
- Google logo: Login via google
- Github logo: Login via github
- Add: Add a task
- Pencil: Update a task
- Update: Confirm task update
- Bin: Delete a task

## Development Enviroment

```bash
.env
```

file contains:

```env
MONGO_URI= MongoDB URI

PORT= Port of choice

GOOGLE_CLIENT_ID = Access token
GOOGLE_CLIENT_SECRET = Secret access token

GITHUB_CLIENT_ID = Access token
GITHUB_CLIENT_SECRET = Secret access token
```

## References

- https://youtu.be/7K9kDrtc4S8?si=ry-4YDWLZXWjpHUm
- https://youtu.be/xElA9mGi-I0?si=OWIZOB32ho4Z6Af-
- https://youtu.be/c_-b_isI4vg?si=l85wn5zZh99XfH4E
- https://youtu.be/eDf91hihLpo?si=qlxywXcZYN6egUWR
- https://youtu.be/7K9kDrtc4S8?si=RfUzRYvrKXipdmLL

## Documentation

API endpoint documentation can be accessed through this link https://docs.google.com/document/d/1L7QkTnVt6m2MsI5cSO34gRgz8oIms217_iEcekGU6tQ/edit?usp=sharing

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
