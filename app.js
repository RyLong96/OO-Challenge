//PART 1
//Create a class for vehicle. Each vehicle instance should have the following properties: make, model, year
//Each Vehicle instance should have access to a method called honk, which returns the string "Beep."

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'Beep!'
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}
const myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

//PART 2
//Create a class for a car. The Car should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        // this.make = make;
        // this.model = model;
        // this.year = year;
        
    }
    numWheels() {
        return 4;
    }
}
const myFirstCar = new Car("Toyota", "Corolla", 2005);

console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheels());

//PART 3
//Create a class for Motorcyle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine methoud which returns "VROOM!!!"

class Motorcyle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        // this.make = make;
        // this.model = model;
        // this.year = year;
        
    }
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}
const myFirstMotorcycle = new Motorcyle("Honda", "Nighthawk", 2000);

console.log(myFirstMotorcycle.honk());
console.log(myFirstMotorcycle.toString());
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheels());

//PART 4
//Creat a class for Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide capacity.

//A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message "Only vvehicles are allowed in here!". Also, if the garage capacity, it should say "Sorry, we're full".

class Garage {
    constructor(capacity) {
        this.vehicles = []; //property called vehicles which will store an array of vehicles
        this.capacity = capacity;
    }
   add(newVehicle){
    if(!(newVehicle instanceof Vehicle)){
        throw new Error("Only vehicles are allowed in here!");

        //ask what instance of is/how it works
    }
    if(this.vehicles.length.length >= this.capacity){
        throw new Error("Sorry, we're full.");
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
   }
}

const garage = new Garage(2); // our garage will have space for 2 vehicles, an empty array
garage.vehicles; //the empty array
garage.add(new Car("Hyuandai", "Elantra", 2015)); //adding a new car
garage.vehicles; //array will have the 2015 elantra
garage.add("Taco") //trying to add a taco, will get an error
garage.add(new Motorcyle("Honda", "Nighthawk", 2000));
garage.vehicles;
garage.add(new Motorcyle("Honda", "Nighthawk", 2001));
