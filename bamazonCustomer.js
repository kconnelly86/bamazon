var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "bamazon"
});//ends connection

connection.connect(function(err) {
	if (err) throw err;
	console.log("conected as id " + connection.threadId + "\n");
	start();
});


function auction() {
  inquirer
    .prompt([
    {
      name: "post",
      type: "input",
      message: "ID of the product you would like to buy?"
  	},
     name: "bid",
      type: "input",
      message: "how many units of the product they would like to buy?"
  	}
    
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.post.toUpperCase() === "POST") {
        postAuction();
      }
      
      else {
      	bidAuction();
      }
    });
])


function postAuction() {
	connection.query("SELECT * FROM products", function(err, res) {
	if (err) throw err;
	console.log(res);	
	})
}
}


