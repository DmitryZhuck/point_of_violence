const cars = {
    count: 0
  };
  
  const houses = {
    data: cars
  };
  
  const trains = { ...cars }; 
  
  const ships = houses.data; 
  
  ships.count = 10;
  
  houses.data.count = 5;
  
  trains.count = 7;
  
console.log(cars.count) 
console.log(cars.count === trains.count) 
console.log(cars.count === houses.data.count)