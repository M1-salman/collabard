 <h3 align="center">Collabard</h3>
 
## About the Project
This is a Video call app with Collaborative Meetings feature using Stream SDK and Nextjs 14 .

With the help of Collabard, you can create a room and share the room ID with your team or friends and they can join the same room and experience the power of real-time video calls and up to 25 individuals can attend a meeting at once.

### Built With
- Nextjs-14
- Typescript
- Zod + React-hook-form
- Stream
- Auth.js (next-auth v5)
- Nodemailer
- Shadcn
- TailwindCSS
- PostgreSQL
- Prisma
- Supabase
- Docker
- Jest + React testing library

### More about the project
When you open the collabard app and click on create your room, and then create an instant room, it pushes you to a dynamic room, and the room ID is generated using nanoid. You can also create a room for later that you can share with your friends, and you can also directly join a room by entering your own room ID in the input box. When you want to join a room without logging in, you will be redirected to the registration page because the room is protected by the middleware. You can register with your own email ID by registering it and then verifying it through the email verification link set to your email through Nodemailer. The input validation of the form are handled by the Zod schema with react-hook-form. All the user details are saved in a postgreSQL database using Prisma-ORM in a structured format. You can also register using your gmail ID or github ID implemented using OAuth. I have also written test case using jest + react testing library for every possible component. For easy deployment or setup implemented Docker and created a custom image of the collabard app that is available on docker hub.
### How to use and more 
1. Linkedin :- add your link
2. Twitter :- add your link

### Prerequisite

- Node.js (Version: 18)

## Installation
1. Clone the GitHub repository
   ```sh
   git clone https://github.com/M1-salman/collabard.git
   ```

2. Go to the project folder collabard

3. Install all packages using yarn install or yarn

4. Create .env file and add your keys, for reference you can use .env.example

5. Run using yarn run dev

6. Open a browser to http://localhost:3000

### Docker installation
1. Clone the GitHub repository
   ```sh
   git clone https://github.com/M1-salman/collabard.git
   ```

2. Go to the project folder collabard

3. Create .env file and add your keys, for reference you can use .env.example

4.  Run this command
   ```sh
     docker run -it -p 3000:3000 --env-file .env m1salman/collabard
   ```

5. Open a browser to http://localhost:3000

## Thank you
