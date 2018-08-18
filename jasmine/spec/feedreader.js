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
         * empty.
         */
        it('are defined', function() {
          //Checking if allFeeds variable is defined
            expect(allFeeds).toBeDefined();
          //Checking if its not empty
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
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


        /* This is a test that loops through each feed
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


    /* A new test suite named "The menu" */
    describe('The menu', function() {
      var testBody = document.querySelector('body');
      var testMenu = document.querySelector('.menu-icon-link');

      /* Here is a test that ensures the menu element is
       * hidden by default. We analyze the HTML and the
       * CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('is hidden', function() {
         expect(testBody.classList.contains('menu-hidden')).toBe(true);
       });

       /* Next is a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility', function() {
          testMenu.click();
          expect(testBody.classList.contains('menu-hidden')).toBe(false);
          testMenu.click();
          expect(testBody.classList.contains('menu-hidden')).toBe(true);
        });
    });



    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* Here is a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * loadFeed() is asynchronous so this test requires the use of
       * Jasmine's beforeEach and asynchronous done() function.
       */
       beforeEach(function(done) {
         loadFeed(0,done);
       });
       // Checks if completed work contains content
       it('completes work', function() {
         expect($('.feed .entry').length).toBeGreaterThan(0);
       });
    });



  /* A new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* Here is a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */

    var feedContent;
    var testFeed = document.querySelector('.feed');

     beforeEach(function(done) {
       //Loading first feed
       loadFeed(0, function() {
         feedContent = testFeed.innerText;
         //Loading next feed
         loadFeed(1, function() {
         done();
         });
       });
     });

     //Now will compare 'first' feed content with new feed content
      it('content changes', function() {
         expect(testFeed.innerText !== feedContent).toBe(true);
    });
  });
}());
