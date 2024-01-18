const personalProfile={
    firstname:'sahin',
    firstsurname:'derisov',
    age:21,
    favoritLanguage:'Englis',
    contactInfo:{
        email:'shahinderishov@gmail.com',
        phone:'0558049820'
    }
}
personalProfile['occuptio']='Developer'
personalProfile.contactInfo['address']='baku'
console.log(personalProfile.firstname)
console.log(personalProfile.favoritLanguage)
console.log(personalProfile['contactInfo'].address)