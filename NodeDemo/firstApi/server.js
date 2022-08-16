var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var ingredients = [
    {
        "id":"232kAk",
        "text":"Eggs"
    },
    {
        "id":"dkP352",
        "text":"Milk"
    },
    {
        "id":"dkcuuu7",
        "text":"Bacon"
    },
    {
        "id":"73hdy",
        "text":"Frogs Legs"
    }
];


app.get('/', function(request, response) {
    response.send(ingredients);
});

app.listen(3000, function() {
    console.log("First API running on port 3000");
});