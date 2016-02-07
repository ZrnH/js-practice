var contactList = {
  syed:"2015556666",
  joe: "9171234567"
}
 console.log(contactList.syed)

 for(var property in contactList){ //for every property in the contactList
   console.log(property ) //print out the property
   console.log(contactList[property]) //print out the value
 }
