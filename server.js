const express = require('express')
const app = express()
const port = 3000

let bottlesOfBeer

// Home page
app.get('/', (req, res) => {
    bottlesOfBeer = 98

    res.send(`99 bottles of beer on the wall <br></br><a href="http://localhost:3000/${bottlesOfBeer}">Take one down...</a>`)
})

// Route for number of bottles param
app.get('/:number_of_bottles', (req, res) => {
    bottlesOfBeer -= 1

    if(req.params.number_of_bottles <= 0 || bottlesOfBeer == -1){
        bottlesOfBeer = 98
        res.send(`${req.params.number_of_bottles} bottles of beer on the wall <br></br> <a href="http://localhost:3000/">Start Over</a>`)
    }

    res.send(`${req.params.number_of_bottles} bottles of beer on the wall <br></br><a href="http://localhost:3000/${bottlesOfBeer}">Take one down...</a>`)
})



app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})