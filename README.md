<h1 align="center">
  <br>
  <a href="https://app.jnyiunn.com/book-exchange/"><img src="https://github.com/yasamnoya/book-exchange-app/blob/readme/Book_Exchange.png?raw=trueg" alt="Book exchange" width="600"></a>
</h1>

<h4 align="center">📚 Turn the old book into useful ones.</h4>

<p align="center">
  <a href="https://app.jnyiunn.com/book-exchange/"><img src="https://img.shields.io/badge/Deployed%20On-AWS-yellow"></a>
</p>


![screenshot](https://github.com/yasamnoya/book-exchange-app/blob/readme/Book_Exchange_screenshot.png?raw=true)

# Tech Used

- [Vue](https://vuejs.org/) -  frontend framework
- [Vue router](https://router.vuejs.org/) - the official router for Vue.js
- [axios](https://www.axios.com/) - handling ajax requests

## Deployment

- [Amazon EC2](https://aws.amazon.com/ec2/) - hosting both frontend & backend of the application
- [NGINX](https://www.nginx.com/) - serving the frontend

# Setup

1. Clone this repository.
2. Create a env file `.env`. Sample as below:
```
VUE_APP_BACKEND_URL=http://localhost:3000/
VUE_APP_GITHUB_CLIENT_ID=<your GitHub client id>
```
3. Start the server for development: `npm run serve`
4. Build for production: `npm run build`
5. See [this repo](https://github.com/yasamnoya/book-exchange-app) for the backend of this application.

# License

MIT
