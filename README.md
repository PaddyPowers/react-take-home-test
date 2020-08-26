# Nova Futur Coding Challenge 

This is a coding challenge to verify my skill level in Frontend Development. 
The application is designed to visualise the API of https://openweathermap.org

![Screenshot of application](https://nova-futur-repo.s3.eu-west-2.amazonaws.com/Screenshot+2020-08-25+at+21.33.25.png)

## Demo
    http://nova-futur.s3-website.eu-west-2.amazonaws.com/

## Notable Features
* Use of Redux to request data and store in state.
* Use of BitBucket's CI/CD Platform.
* Use of unit testing through Jest.
* Use of linting to ensure code consistency.

## Getting Started

#### Running Locally 
* Requirements
    * Nodejs 13.12.0
    * NPM 6.14.4

* Install with NPM with a terminal in the appication directory.
```
npm install
```
* Then start the application.
```
npm start
```

## Testing
* To test this application, first install the application shown in the Getting Started section.
* then run the following command in with a terminal in the appication directory.
```
npm test
```

## Notes to Improve Upon
* Test coverage is limited to the utility functions, it should be expanded to:
    * API Middleware.
    * Receiving expected data from API.
    * Snapshot testing of expected components.
* Some of the weather icons have a night alternative, it would be nice to change that depending on the time of day.
* I think it would be more beneficial to use the new One Call API https://openweathermap.org/api/one-call-api but as according to the test I used the two provided resources.
* There needs to be placeholder elements whilst the API fetches the requests.
* Production needs to be minified and uglified.

## Support
If you have any questions, please reach out to patrickdrabble@outlook.com.
