// Question 97
function CurrentDate():string{
    let d = new Date;
    let date = String(d.getDate()).padStart(2,"0");
    let month = String(d.getMonth() + 1).padStart(2,"0")  //Add 1 because month index is 0.
    let year = d.getFullYear();
    return `${date}--${month}--${year}`;
}

console.log(CurrentDate())

// Question 98
function DayUntilNewYearLeft():number{
    let today = new Date;
    let newYear = new Date(today.getFullYear()+ 1,0,1);
    let diff = newYear.getTime() - today.getTime();
    let day = Math.ceil(diff/(1000*60*60*24));
    return day;
}
console.log(`${DayUntilNewYearLeft()} days are left to start new year.`);

// Question 99
function GetNextBirthday(month:number,date:number):Date{
    let today = new Date;
    let newYear = today.getFullYear();
    let birthday = new Date(newYear,month-1,date);
    if(birthday<today){
        birthday.setFullYear(newYear+1);
    }
    return birthday;
}

let nextBrithday = GetNextBirthday(8,14);
// let nextBrithday = GetNextBirthday(2,21);
console.log(`Next Birthday on :`, nextBrithday.toLocaleDateString())
// console.log(nextBrithday);