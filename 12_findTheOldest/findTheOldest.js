const findTheOldest = function (array) {
  return array.reduce((prevPerson, curPerson) => {
    const prevAge = getAge(prevPerson.yearOfBirth, prevPerson.yearOfDeath);
    const curAge = getAge(curPerson.yearOfBirth, curPerson.yearOfDeath);

    return prevAge > curAge ? prevPerson : curPerson;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }

  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
