//business logic



//UI logic



//Objects
  //Movie Catalog✔︎

  //Movie Object✔︎

  //Ticket Object✔
    //ageRange✔︎

    //newRelease?✔︎

    //timeOfDay✔︎

      //function getPrice(this.age, this.new, this.tod)✔︎

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

function Movie(name, newRelease, showTimes) {
  this.name = name;
  this.newRelease = newRelease;
  this.showTimes = showTimes;
}

function Catalog() {
  this.movies = [];
}

Catalog.prototype.addMovie = function (movie) {
  this.movies.push(movie);
}


// function displayContactDetails(addressBookToDisplay) {
//   let contactsList = $("ul#contacts");
//   let htmlForContactInfo = "";
//   Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
//     const contact = addressBookToDisplay.findContact(key);
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// }
function generateCards(Cat){
  let output = '';
  for (let i in Cat.movies){
  output = output + "<div id=" + i +"><h3>" + Cat.movies[i].name +"</h3>" + timeButtons(Cat.movies[i]) + "</div>"
  } 
  return output;
}

//abandoned
function tButtons(val) {
  return "<button value='" + val + "'>test</button>";
}


function timeButtons(movie){
  console.log("movie from timebuttons: "+ movie);
  output = '';
  for(let m in movie.showTimes){
    let text = '';
    if (movie.showTimes[m] === 0){
      text = "morning";
    }else if (movie.showTimes[m] === 1){
      text = "midDay";
    }else {
      text = "evening";
    }
    output = output + "<button class='timeButtons' id='button" + m + "' value='" + movie.newRelease + "," + movie.showTimes[m] + "'>" + text + "</button>";
    // output = "<button> this is a test</button>";
  }
  return output;
}
//utility function for each loop to add showtime buttons

//for each showtime in the array, make a button. if 0 text = morning if 1 text = mid day if 2 text = evening
// return an output string with button elements inside


//misc testing stuff to be deleted later
function setupStuff(){
  let Movie1 = new Movie("Movie",false,[0,2]);
  let Movie2 = new Movie("Movie 2 return of the movie",false,[1]);
  let Movie3 = new Movie("Movie 3 Tokyo drift",true,[0,1,2]);
  
  let Catalog1 = new Catalog();
  Catalog1.addMovie(Movie1);
  console.log(Movie1.showTimes);
  Catalog1.addMovie(Movie2);
  console.log(Movie2.showTimes);
  Catalog1.addMovie(Movie3);
  console.log(Movie3.showTimes);
  return Catalog1;
}

$(document).ready(function(){
  let mainCatalog = setupStuff();
  $(".display-movies").html(generateCards(mainCatalog));
});
