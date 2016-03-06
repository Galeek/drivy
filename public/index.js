'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

function exo_1()
{
	console.log("Exercise 1 : Generate the price for each driver");
	var time = 0;
	var distance = 0;
	var i = 0;
	var j = 0;
	var firstDay = new Date();
	var lastDay = new Date();
	var numDays = 0;
	for (i = 0; i < rentals.length; i++)
	{
		firstDay = new Date(rentals[i].pickupDate);
		lastDay = new Date(rentals[i].returnDate);
		numDays = (lastDay - firstDay) / 86400000 + 1;

		for (j = 0; j < cars.length; j++)
		{
			if (rentals[i].carId == cars[j].id)
			{
				time = numDays * cars[j].pricePerDay;
				distance = rentals[i].distance * cars[j].pricePerKm;
			}
		}
		rentals[i].price = time + distance;
	}
}

function exo_2()
{
	console.log("Exercise 2 : Decreasing pricing for longer rentals");
	var time = 0;
	var distance = 0;
	var i = 0;
	var j = 0;
	var firstDay = new Date();
	var lastDay = new Date();
	var numDays = 0;
	for (i = 0; i < rentals.length; i++)
	{
		firstDay = new Date(rentals[i].pickupDate);
		lastDay = new Date(rentals[i].returnDate);
		numDays = (lastDay - firstDay) / 86400000 + 1;

		for (j = 0; j < cars.length; j++)
		{
			if (rentals[i].carId == cars[j].id)
			{
				if (numDays >= 1 && numDays < 4)
				{
					cars[j].pricePerDay *= 0.9;
				}
				else if (numDays >= 4 && numDays < 10)
				{
					cars[j].pricePerDay *= 0.7;
				}
				else if (numDays >= 10)
				{
					cars[j].pricePerDay *= 0.5;
				}
				time = numDays * cars[j].pricePerDay;
				distance = rentals[i].distance * cars[j].pricePerKm;
			}
		}
		rentals[i].price = time + distance;
	}
}

function exo_3()
{
	console.log("Exercise 3 : Commission");
	var time = 0;
	var distance = 0;
	var i = 0;
	var j = 0;
	var firstDay = new Date();
	var lastDay = new Date();
	var numDays = 0;
	var commission = 0;
	for (i = 0; i < rentals.length; i++)
	{
		firstDay = new Date(rentals[i].pickupDate);
		lastDay = new Date(rentals[i].returnDate);
		numDays = (lastDay - firstDay) / 86400000 + 1;

		for (j = 0; j < cars.length; j++)
		{
			if (rentals[i].carId == cars[j].id)
			{
				if (numDays >= 1 && numDays < 4)
				{
					cars[j].pricePerDay *= 0.9;
				}
				else if (numDays >= 4 && numDays < 10)
				{
					cars[j].pricePerDay *= 0.7;
				}
				else if (numDays >= 10)
				{
					cars[j].pricePerDay *= 0.5;
				}
				time = numDays * cars[j].pricePerDay;
				distance = rentals[i].distance * cars[j].pricePerKm;
			}
		}
		rentals[i].price = time + distance;
		
		commission = 0.3 * rentals[i].price;
		rentals[i].commission.insurance = commission / 2;
		rentals[i].commission.assistance = numDays;
		rentals[i].commission.drivy = commission - (rentals[i].commission.insurance + rentals[i].commission.assistance);
	}
}

function exo_4()
{
	console.log("Exercise 4 : The deductible");
	var time = 0;
	var distance = 0;
	var i = 0;
	var j = 0;
	var firstDay = new Date();
	var lastDay = new Date();
	var numDays = 0;
	var commission = 0;
	var deductible = 0;
	for (i = 0; i < rentals.length; i++)
	{
		firstDay = new Date(rentals[i].pickupDate);
		lastDay = new Date(rentals[i].returnDate);
		numDays = (lastDay - firstDay) / 86400000 + 1;

		for (j = 0; j < cars.length; j++)
		{
			if (rentals[i].carId == cars[j].id)
			{
				if (numDays >= 1 && numDays < 4)
				{
					cars[j].pricePerDay *= 0.9;
				}
				else if (numDays >= 4 && numDays < 10)
				{
					cars[j].pricePerDay *= 0.7;
				}
				else if (numDays >= 10)
				{
					cars[j].pricePerDay *= 0.5;
				}
				time = numDays * cars[j].pricePerDay;
				distance = rentals[i].distance * cars[j].pricePerKm;
			}
		}
		rentals[i].price = time + distance;
		
		commission = 0.3 * rentals[i].price;
		rentals[i].commission.insurance = commission / 2;
		rentals[i].commission.assistance = numDays;
		rentals[i].commission.drivy = commission - (rentals[i].commission.insurance + rentals[i].commission.assistance);
		
		if (rentals[i].options.deductibleReduction == false)
		{
			//deductible = 800;
		}
		else
		{
			//deductible = 150 + numDays * 4;
			deductible = numDays * 4;
		}
		rentals[i].price += deductible;
	}
}

function exo_5()
{
	console.log("Exercise 5 : Pay the actors");
	var time = 0;
	var distance = 0;
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	var firstDay = new Date();
	var lastDay = new Date();
	var numDays = 0;
	var commission = 0;
	var deductible = 0;
	for (i = 0; i < rentals.length; i++)
	{
		firstDay = new Date(rentals[i].pickupDate);
		lastDay = new Date(rentals[i].returnDate);
		numDays = (lastDay - firstDay) / 86400000 + 1;

		for (j = 0; j < cars.length; j++)
		{
			if (rentals[i].carId == cars[j].id)
			{
				if (numDays >= 1 && numDays < 4)
				{
					cars[j].pricePerDay *= 0.9;
				}
				else if (numDays >= 4 && numDays < 10)
				{
					cars[j].pricePerDay *= 0.7;
				}
				else if (numDays >= 10)
				{
					cars[j].pricePerDay *= 0.5;
				}
				time = numDays * cars[j].pricePerDay;
				distance = rentals[i].distance * cars[j].pricePerKm;
			}
		}
		rentals[i].price = time + distance;
		
		commission = 0.3 * rentals[i].price;
		rentals[i].commission.insurance = commission / 2;
		rentals[i].commission.assistance = numDays;
		rentals[i].commission.drivy = commission - (rentals[i].commission.insurance + rentals[i].commission.assistance);
		
		if (rentals[i].options.deductibleReduction == false)
		{
			//deductible = 800;
		}
		else
		{
			//deductible = 150 + numDays * 4;
			deductible = numDays * 4;
		}
		rentals[i].price += deductible;
		
		for (k = 0; k < actors.length; k++)
		{
			for (l = 0; l < rentals.length; l++)
			{
				if (actors[k].rentalId == rentals[l].id)
				{
					actors[k].payment[0].amount = rentals[l].price;
					actors[k].payment[2].amount = rentals[l].commission.insurance;
					actors[k].payment[3].amount = rentals[l].commission.assistance;
					if (rentals[l].options.deductibleReduction == true)
					{
						actors[k].payment[4].amount = rentals[l].commission.drivy + numDays * 4;
						actors[k].payment[1].amount = rentals[l].price * 0.7 - numDays * 4;
					}
					else
					{
						actors[k].payment[4].amount = rentals[l].commission.drivy;
						actors[k].payment[1].amount = rentals[l].price * 0.7;
					}
				}
			}
		}
	}
}

exo_5();

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);