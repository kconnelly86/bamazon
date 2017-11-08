var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "bamazon"
})//ends connection

connection.connect(function(err){
	if (err) throw err;
	console.log("Connection Successful");
	makeTable();
})  


var makeTable = function(){
	connection.query("SELECT * FROM products", function(err,res){

    	for (var i = 0; i < res.length; i++) {
    		
    	console.log(res[i].itemid+" || "
    		+res[i].productname+" || "+res[i].departmentname+" || "
    		+res[i].price+" || "+res[i].stockquantity+"\n");

    	}//end of for loop

	});//ends query

}//closes makeTable




