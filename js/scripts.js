//business logic



//UI logic



//Objects
  //Movie Catalog

  //Movie Object

  //Ticket Object
    //ageRange

    //newRelease?

    //timeOfDay

      //function getPrice(this.age, this.new, this.tod)

function Ticket(newRelease, showTime, ageRange) {
  this.newRelease = newRelease;
  this.showTime = showTime;
  this.ageRange = ageRange;
}

function Movie(newRelease, showTimes) {
  this.newRelease = newRelease;
  this.showTimes = showTimes;
}

function Catalog() {
  this.movies = [];
}

Catalog.prototype.addMovie = function (movie) {
  this.movies.push(movie);
}


