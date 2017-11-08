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
promptCustomer(res);
	});//ends query

}//closes makeTable
var promptCustomer = function(res) {
	inquirer.prompt([{
		type: "input",
		name: "choice",
		message: "What would you like to purchase? [Quit with Q]"
	}]).then(function(answer){
		var correct = false;
		if(answer.choice.toUpperCase()=="Q") {
			process.exit();
		}
		for (var i = 0; i < res.length; i++) {
			if(res[i].productname==answer.choice){
				correct=true;
				var product=answer.choice;
				var id=i;
				inquirer.prompt({
					type: "input",
					name: "quant",
					message: "How many would you like to buy",
					validate: function(value){
						if(isNaN(value)==false) {
							return true;
						} else {
							return false;
						}

					}//ends validate
				})//ends inquirer prompt
				.then(function(answer){
					if((res[id].stockquantity-answer.quant)>0){
						connection.query("UPDATE products SET stockquantity='"+(res[id].stockquantity-answer.quant)+"'", function(err,res2){
							console.log("Product Bought");
							makeTable();
						})//ends function in connection.query

					} else {
						console.log("not a valid selection");
						promptCustomer(res);
					}//ends else
				})//ends .thenfunction
			}//ends if statement
		}//ends for loop
		if(i==res.length && correct==false) {
			console.log("Not a valid selection");
			promptCustomer(res);
		}//ends if
	})//ends .thenfunction
}//ends promptCustomer



