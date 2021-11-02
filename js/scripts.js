//business logic



//UI logic

$(document).ready(function(){
  let mainCatalog = setupStuff();
  $("#display-movies").html(generateCards(mainCatalog));
  let MyTicket = new Ticket();
  
  $(".timeButtons").click(function() {
    $("#display-movies").toggle();
    $("#selectionForm").toggle();
    let transferValue = this.value;
    transferValue = transferValue.split(",");
    transferValue[0] = (transferValue[0]==="true");
    transferValue[1] = parseInt(transferValue[1]);
    MyTicket.newRelease = transferValue[0];
    MyTicket.showTime = transferValue[1];
    console.log(MyTicket);
    
  }); 

  $("form").submit(function(event){
    event.preventDefault();
    let ageSelection = $("input:radio[name=ageRange]:checked").val();
    MyTicket.ageRange = ageSelection;
    $("#display-selected-movie").text("Your Ticket Costs is $"+ MyTicket.getPrice());

    $("#selectionForm").toggle();
    $("#display-selected-movie").toggle();
    console.log(MyTicket);
  });

});

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

//Utility Functions

function generateCards(Cat){
  let output = '';
  for (let i in Cat.movies){
  output = output + "<div class='movieCard' id=" + i +"><h3>" + Cat.movies[i].name +"</h3>" + timeButtons(Cat.movies[i]) + "</div>"
  } 
  return "<div class= 'Box'>" + output + "</div>";
}

function timeButtons(movie){
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
  }
  return "<div class='buttonBox'>" + output + "</div>";
}

//abandoned
function tButtons(val) {
  return "<button value='" + val + "'>test</button>";
}

//misc testing stuff to be deleted later
function setupStuff(){
  let Movie1 = new Movie("Movie", false, [0,2]);
  let Movie2 = new Movie("Movie 2: movie Harder", false, [1]);
  let Movie3 = new Movie("Movie 3: Tokyo drift", true, [0,1,2]);

  
  let Catalog1 = new Catalog();
  Catalog1.addMovie(Movie1);
  Catalog1.addMovie(Movie2);
  Catalog1.addMovie(Movie3);
  
  return Catalog1;
}