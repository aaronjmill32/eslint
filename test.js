vehicle = function(){
  this.speed = 0
  this.dist = 0
  this.move = function(speed,dist){
    this.dist = dist
    this.speed = speed
    console.log('You moved ' + this.dist + ' at ' + this.speed)
  }
	
}

Car = function(){
  this.doors = 4
  this.radio = true
  this.radio.playMusic = function(){
    console.log('Playing music')
  }
}

Airplane = function(){
  this.door = 1
  this.eject = function(){
    console.log('EJECTING PILOTS')
	}
}

Prius = function(){
  this.engine = Hybrid
  this.regenerativelyBrake = function(){
    console.log('Something about regenerative breakes ');
  }
}

Car.prototype = vehicle
Airplane.prototype = vehicle
Prius.prototype = Car

newCar = Prius.create()
newCar.move(30,2)
newCar.move = null
