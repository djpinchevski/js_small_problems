/*
How Big is the Room
Build a program that asks a user for the length and width of a room in meters, and then logs to the console the area of the room in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the prompt() function to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

function area() {
  var width = Number(prompt('What is the width in meters?'));
  var length = Number(prompt('What is the length in meters?'));
  var areaSqMeters = Number(width * length);
  var SQ_METERS_TO_SQ_FEET = 10.7639;
  var areaSqFeet = areaSqMeters * SQ_METERS_TO_SQ_FEET;

  console.log('The area of the room is ' + areaSqMeters.toFixed(2) + ' square meters (' + areaSqFeet.toFixed(2) + ' square feet).');
}

area();
