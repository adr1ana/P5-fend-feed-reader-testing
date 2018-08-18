# P5-fend-feed-reader-testing

In this project I was given a web-based application that reads RSS feeds. My job was to make testings on website with [Jasmine](http://jasmine.github.io/) framework for testing JavaScript code.

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

## How to run RSS feed test?

_Note: if you have not installed NodeJS or NPM you will need to install these first before running Jasmine tests. 
You can download and install NodeJS and NPM by going to [Nodes official site](https://nodejs.org/en/) and downloading the latest version of NodeJS._
1. Clone or download my project from GitHub.
2. To run website and tests open `index.html` with any browser you have.
3. If you want to check or edit tests, open: **\jasmine\spec\feedreader.js** which contains all tests that will run against my app.
4. I would like to mention RSS feed reader application too: **\js\app.js** . It uses the Google Feed Reader API to grab RSS feeds as JSON object. It also uses the Handlebars templating library and jQuery. Go throu it to understand project logic.

## What was my task?

- [x] Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)
- [x] Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
- [x] Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
- [x] Review the functionality of the application within your browser.
- [x] Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
- [x] Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
- [x] Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
- [x] Return the `allFeeds` variable to a passing state.
- [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- [x] Write a new test suite named `"The menu"`.
- [x] Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
- [x] Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- [x] Write a test suite named `"Initial Entries"`.
- [x] Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- [x] Write a test suite named `"New Feed Selection"`.
- [x] Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
- [x] No test should be dependent on the results of another.
- [x] Callbacks should be used to ensure that feeds are loaded before they are tested.
- [x] Implement error handling for undefined variables and out-of-bound array access.
- [x] When complete - all of your tests should pass. 
- [x] Write a README file detailing all steps required to successfully run the application. 

### Note:
This [Jasmine guide](https://jasmine.github.io/2.1/introduction) helped me a lot in writing tests too. 
For this projects we were using `Jasmine-2.1.2`
