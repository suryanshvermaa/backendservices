## Mailing in backend(Free)
- Install nodemailer
```
npm install nodemailer
```
or
```
pnpm add nodemailer
```
For creadentials
- Go to your google account
![Google Accont](./screenshots/Screenshot%20from%202025-06-15%2013-41-56.png)

- select `Go to Google Account`
![Your Google Account](./screenshots/Screenshot%20from%202025-06-15%2013-42-15.png)


- Go to `security` section and on two factor authentication if it is not on. And then in search bar type `app password` and click on `app passwords`
![Security Section](./screenshots/Screenshot%20from%202025-06-15%2013-46-15.png)

- Create your app here and copy that `password`.

### env setup
```
npm i dotenv
```
- make .env folder and paste this.
```bash
USER="your mail"
PASSWORD="your app password"
```
- Now use index.js code. and mail.

Happy Coding!✅😍