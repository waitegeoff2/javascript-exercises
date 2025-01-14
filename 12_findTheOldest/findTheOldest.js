const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    } 

    return death - birth;

};


const findTheOldest = function(people) {
       

    const orderedAge = people.sort((a,b) => 
        getAge(b.yearOfBirth, b.yearOfDeath) - getAge(a.yearOfBirth, a.yearOfDeath));
    
    const oldestPerson = orderedAge[0];
    return oldestPerson;

    };

    // const findTheOldest = function (people) {
    //     const peopleOldestToYoungest = people.toSorted(
    //       (person, nextPerson) => getAge(nextPerson) - getAge(person),
    //     );
      
    //     const oldestPerson = peopleOldestToYoungest[0];
    //     return oldestPerson;
    //   };


// Do not edit below this line
module.exports = findTheOldest;
