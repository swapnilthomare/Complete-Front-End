//var student = {}

var student = {
    "name": "abc",
    "rolNO" : 135,
    "Marks" : 90
  };
  
  
  student.Marks;

  //updating value

  student.Marks = 35;
  
  //Adding property to object*/
  student.sem = 4;

  //var obj = {};
//var obj = {};

function printProperety(obj, prop){
    console.log(obj[prop]);
    }
    
    
    printProperety(student, "Marks");


    // deleting property form object

delete student["Marks"]

delete student.sem


//Itterating over object


for(var prop in student){
  console.log(prop,student[prop])
};

// to get all keys

 var keys = Object.keys(student);

var keysh = Object.getOwnPropertyNames(student);


// object inside object


var student = {
    "name": "abc",
    "rolNO" : 135,
    "Marks" : 90,
    address : {
        city : "New Delhi",
      pincode: 110032,
      }
  };


  //  how to access
  student.address;
  student.address.city;
  student.address["city"];




  
 