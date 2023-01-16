// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
const directorsArray = moviesArray.map( (movie)=>{
    return movie.director
} )
return directorsArray
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   // const spielbergArray = moviesArray.filter (movie.director) => movie.director === `Steven Spielberg`
   const spielbergMovies = moviesArray.filter(function (movie){
    return movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`)
   })

    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === 0){
    return 0
}

const scoreSum = moviesArray.reduce ((sum , movie) => {
    if (typeof movie.score === `number`)
    {
       return sum + movie.score
    }
    else {
       return sum + 0
    }
},0)

const avg = scoreSum / moviesArray.length
return parseFloat(avg.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

const dramaMovies = moviesArray.filter(function (movie){
        return movie.genre.includes(`Drama`)
       })


       if (dramaMovies.length === 0){
        return 0
    } 

const scoreSum = dramaMovies.reduce ((sum , movie) => {
        if (typeof movie.score === `number`)
        {
           return sum + movie.score
        }
        else {
           return sum + 0
        }
    },0)

 const average = scoreSum / dramaMovies.length
 return parseFloat(average.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
let newArray= []
  for (let i=0 ; i<moviesArray.length ; i++){
    newArray[i] = moviesArray[i]
  }

  const orderedArr = newArray.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title))

  return orderedArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
 /*   const newArr = []
    for (let i=0 ; i < moviesArray.length ; i++){
        newArr[i] = moviesArray[i].title
    }

    let shortArr =[]
    for (i=0 ; i < 20 ; i++){
        shortArr[i] = newArr[i]
    }

    orderedArr = shortArr.sort((a,b) => a - b)
    return orderedArr 

*/
return moviesArray.map(movie => movie.title).sort().slice(0,20)




}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

const newArr = JSON.parse(JSON.stringify(moviesArray));


let durationString = ``
let durationArray = []
let durationConverted = 0

for (let i=0 ; i < newArr.length ; i++){
    durationString = newArr[i].duration
    durationArray = durationString.match(/\d+/g)
    if (durationArray.length === 2){
    durationConverted = parseInt(durationArray[0])*60 + parseInt(durationArray[1])
    }
    else {
        durationConverted = parseInt(durationArray[0])*60 
    }
    newArr[i].duration = durationConverted
    }

    

return newArr
}




// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
