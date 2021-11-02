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

Ticket.prototype.getPrice = function() {
  let output = 0;
  if (this.newRelease){
    output += 3;
  }else{
    output +=1
  }

  if (this.showTime === 0){
    output += 1;
  }else if (this.showTime === 1){
    output += 2;
  }else{
    output += 3;
  } 

  if (this.ageRange === 0){
    output += 4;
  }else if (this.ageRange === 1){
    output += 6;
  }else{
    output += 5;
  }

  return output;
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

