# io-exposure-sample

A Node JS project that implements the Intraoral Exposure Service. The project uses Express JS and mock data to serve results. The Swagger specification is rendered by Express JS so that developers can browse the API documentation and issue API requests directly from the Swagger document.

## Build and run
You will need NodeJS installed on your development system. Open a terminal in this folder and issue the following commands:
```
npm install
npm run start
```

At this point the mock service should be running and a message will appear in your terminal indicating the port (8080 by default). You can issue API requests to this service using any appropriate tool.

## Browse Swagger Docs
Simply open your browser to the default address that the mock service is listening on: `http://localhost:8080`

The swagger documentation will be displayed and you can use the _Try it out_ button to make API calls to the mock service.

## Customize
To customize or modify the mock data delivered by this sample, you can review and modify the code in _mock-data.js_.