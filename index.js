const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    let age = getAge(birthdayValue);
    //resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    resultEl.innerText =age;
  
  }
}
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();
  let day=currentDate.getDate()- birthdayDate.getDate();



  if (month === 0 ||month < 0){
    age--;
  if(currentDate.getDate() < birthdayDate.getDate()) {
    month= month+11;
    day=day+30;
  } 
  if(currentDate.getDate() >birthdayDate.getDate())
  {
    month=month+12;
  }
  }                                 

  let agereal=`${age} years ${month} months ${day} days.`

  return agereal;
}

btnEl.addEventListener("click", calculateAge);
