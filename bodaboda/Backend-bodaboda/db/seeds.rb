# This is an example of how to create a list of objects with null values for name, email, and password fields
# Replace the null values with the appropriate values for your use case
puts "🌱 Seeding data..."
users = [
  { 
    name: "John Doe",
    created_at: Time.now,
    updated_at: Time.now,
    email: "johndoe@example.com",
    password: "password"
  },
  {
    name: "Jane",
    created_at: Time.now,
    updated_at: Time.now,
    email: "janedoe@example.com",
    password: "password"
  },
  {
    name: "Bob Smith",
    created_at: Time.now,
    updated_at: Time.now,
    email: "bobsmith@example.com",
    password: "password"
  }
]
users.each do|user|
user=User.create(user)
end
  
bookings =[
  {
    name:"henry",
    rating: "good",
    status: "lipamdongo"
  }
]

bookings.each do |booking|
  booking=Booking.create(booking)
end
bikes = [
  {
    "name": "sportybike",
    "price": 370000,
    "image": "./images/baba.jpeg",
    "status_pay": "available on pay"
  },
  { 
    "name": "mortbike",
    "price": 2006810,
    "image": "./images/t7.jpeg",
    "status_pay": "lipa mdongo"
  },
  { 
    "name": "mortbike",
    "price": 8670000,
    "image": "./images/cop.jpeg",
    "status_pay": "available for loan"
  },
  { 
    "name": "mortbike",
    "price": 7370000,
    "image": "./images/syk.jpeg",
    "status_pay": "available on pay"
  },
  { 
    "name": "mortbike",
    "price": 4470000,
    "image": "./images/lvt.jpeg",
    "status_pay": "available hire purchase"
  },
  { 
    "name": "levart",
    "price": 1900000,
    "image": "./images/sms.jpeg",
    "status_pay": "available on pay"
  },
  { 
    "name": "gloves",
    "price": 7370000,
    "image": "./images/t3.jpeg",
    "status_pay": "available on pay"
  },
  { 
    "name": "jacket",
    "price": 999098,
    "image": "./images/t5.jpeg",
    "status_pay": "available on pay"
  },
  {
    "name": "helmet",
    "price": 80000,
    "image": "./images/t6.jpeg",
    "status_pay": "available on pay"
  },
  { 
    "name": "mortbike",
    "price": 3330000,
    "image": "./images/t7.jpeg",
    "status_pay": "available on pay"
  },
  {
    "name": "mortbike",
    "price": 6456000,
    "image": "./images/syk.jpeg",
    "status_pay": "available on pay"
  },
  {
    "name": "mortbike",
    "price": 570000,
    "image": "./images/syk.jpeg",
    "status_pay": "available on pay"
  },
  { 
    "name": "ruki",
    "price": 860000,
    "image": "./images/syk.jpeg",
    "status_pay": "available on pay"
  },
  {
    "name": "levart",
    "price": 4909900,
    "image": "./images/syk.jpeg",
    "status_pay": "available on pay"
  },
  { 
    "name": "boxer",
    "price": 700000,
    "image": "./images/syk.jpeg",
    "status_pay": "available on pay"
  },
  {
    "name": "honder",
    "price": 210006,
    "image": "./images/syk.jpeg",
    "status_pay": "available on pay"
  }]
  
bikes.each do |bike|
  Bike.create(bike)
end
  
    
  puts "🌱 Done seeding!"