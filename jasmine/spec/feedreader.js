/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
          //Checking if allFeeds variable is defined
            expect(allFeeds).toBeDefined();
          //Checking if its not empty
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url defined', function() {
           for(let feed of allFeeds) {
            //Checking if URL is defined
             expect(feed.url).toBeDefined();
            //Checking if URL is not empty
             expect(feed.url.length).not.toBe(0);
           }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
           for(let feed of allFeeds) {
            //Testing if feed name property is defined
             expect(feed.name).toBeDefined();
            //Testing if name is not empty
             expect(feed.name.length).not.toBe(0);
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
      var testBody = document.querySelector('body');
      var testMenu = document.querySelector('.menu-icon-link');

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('is hidden', function() {
         expect(testBody.classList.contains('menu-hidden')).toBe(true);
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility', function() {
          testMenu.click();
          expect(testBody.classList.contains('menu-hidden')).toBe(false);
          testMenu.click();
          expect(testBody.classList.contains('menu-hidden')).toBe(true);
        });
    });



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       beforeEach(function(done) {
         loadFeed(0,done);
       });
       // Checks if completed work contains content
       it('completes work', function() {
         var entry = document.querySelector('.feed').children;
         expect(entry.length).toBeGreaterThan(0);
       });
    });



  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    // sorting feed's content into a new empty array
    var feedContent = [];
    var testFeed = document.querySelector('.feed');

     beforeEach(function(done) {
       //Loading first feed
       loadFeed(0);
       Array.from(testFeed.children).forEach(function(entry) {
         feedContent.push(entry.innerText);
       });
       //Loading next feed
       loadFeed(1,done);
     });
     //Now will compare 'first' feed content with new feed content
     it('content changes', function() {
       Array.from(testFeed.children).forEach(function(entry,index) {
         expect(entry.innerText !== feedContent[index]).toBe(true);
       });
    });
  });
}());
