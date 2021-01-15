module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {	
	  	id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
      	},
	  	firstname: {
			type: Sequelize.STRING
	  	},
	  	lastname: {
		  type: Sequelize.STRING
	  	},
	  	email: {
			type: Sequelize.STRING
		},	  
		password: {
			type: Sequelize.STRING
		},
	  	address: {
			type: Sequelize.STRING
	 	},	  
	  	birthDay: {
			type: Sequelize.DATE
		},
	  	age: {
			type: Sequelize.INTEGER
    	}
	});
	
	return Customer;
}