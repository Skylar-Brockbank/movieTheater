# _Movie Theater_

#### By _**Karen Axon & Skylar Brockbank**_

#### _Returns a price after giving the user options regarding movie, time and age_

## Technologies Used

* _HTML_
* _CSS(Bootstrap)_
* _Git_
* _Javascript_
  
## Description

_Returns a price after giving the user options regarding movie, time and age_

## Setup/Installation Requirements

* _Click the green "Code" button and Download Zip _
* _Extract the contents of the zip file to a folder on your machine_
* _Run the Index.html file with your browser of choice (I recommend Chrome)_

* _alternatively you can [clone this repository](https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-github-remote-repositories) from Git Hub_


## Tests
Description: Ticket()
Test: It should return an object with properties of newRelease, showTime, and ageRange
Code: Ticket1 = new Ticket(false, 1, 1);
      Ticket1.ageRange;
Expected Outcome: 1

Description: Movie()
Test: It should return an object with properties of newRelease, and showTimes
Code: Movie1 = new Movie(true,[]);
      Movie1.newRelease;
Expected Outcome: true

Description: Catalog()
Test: It should return an object containing a list of Movie objects called movies
Code: Catalog1 = new Catalog();
      Movie1 = new Movie(true,[]);
      Catalog1.addMovie(Movie1);
      Catalog1.movies[0].newRelease;
Expected Outcome: true

Description: Ticket.prototype.getPrice()
Test: It should return a price given the specifics of the ticket object.
Code: Ticket1 = new Ticket(true,1,1);
      Ticket1.getPrice();
Expected Outcome: 11

Description: Ticket.prototype.getPrice()
Test: It should return a price given the specifics of the ticket object.
Code: Ticket1 = new Ticket(true,1,0);
      Ticket1.getPrice();
Expected Outcome: 9

Description: tButtons()
Test: It should return a button element
Code: tButtons()
Expected Outcome: "<button>test</button>"

Test: It should return a button element with a value
Code: tButtons(0))
Expected Outcome: "<button value='0'>test</button>"

<!-- Describe: Dog()
Test: It should return an object with properties of name, age and color"
Code: dog1 = new Dog('spot',3,"brown");
            dog1.name;
Expected Output: “spot" -->

## Known Bugs

* _No Known Bugs (bugs coming soon to a theater near you)_

## License

*[MIT](https://opensource.org/licenses/MIT) Licenced
*Copyright (c) _2021_ _Karen Axon_ _Skylar Brockbank_