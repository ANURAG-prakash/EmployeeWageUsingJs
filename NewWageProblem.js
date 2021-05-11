//UC1 IF Else
{
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT)
{
    console.log("UC1 - Employee is Absent ");
}
else
{
    console.log("UC1 - Employee is Present");
}
}
// UC2 Switch Case

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10)%3;
switch(empCheck)
{
    case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
    case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
    default:
            empHrs = 0;        
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC2 - Emp Wage: " + empWage);

//UC3 function
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;        
    }
}

empHrs1 = getWorkingHours(empCheck);
let empWage1 = empHrs1 * WAGE_PER_HOUR;
console.log("UC3 - Emp Wage : " + empWage1);

//UC4 ForLoop
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 8;
    for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
    {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage2 = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC4 - Emp Wage: " + empWage2);

}

//UC5 while loop 
{
    function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR
}
    const MAX_HRS_IN_MONTH = 160;
    const MAX_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_OF_WORKING_DAYS )
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs += getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
    }
    let empWage3 = empHrs * WAGE_PER_HOUR;
    console.log("UC5 - Emp Wage: " + empWage3);


//uc6 Arrays
let empWage4 = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + "Emp Wage :" + empWage4);

}
{
//Array Helper Function
//UC7A - Calculate Total Wage
let empDailyWageArr = new Array();
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;
function sum(dailyWage)
{
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7 - Total Days : " + totalWorkingDays + "Total Hrs :"+totalEmpHrs + "Emp Wage : "+totalEmpWage);
function totalWages(totalWages,dailyWage)
{
    return totalWages + dailyWage;
}
console.log("UC7A - Emp Wage With reduce : " + empDailyWageArr.reduce(totalWages,0));

//UC7B - Show Days Along With Daily Wages
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C - Show Days when Full Time Wage Of 160 
function fulltimewage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimewage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC7D - Find The First occurance when full time Wage was earned 
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on Day : " + mapDayWithWageArr.find(findFullTimeWage));

//UC7E - check if Every Element of Full time Wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7E - Check All Element Have full time Wage : "+ fullDayWageArr.every(isAllFullTimeWage));

//UC7F - Check if there is any Part time Wage 
function isAnyPartyTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Uc 7F - Check If Any Part Time Wage :" + mapDayWithWageArr.some(isAnyPartyTimeWage));

//UC7G - find the number of days the Employee Worked
function totalDaysWorked(numOfDays ,dailyWage)
{
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - Number of days Emp worked : "+ empDailyWageArr.reduce(totalDaysWorked,0));
}
{
    //UC6&7 Array and  Maps
    const MAX_HRS_IN_MONTH = 160;
    const MAX_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();

    function calcDailyWage(empHrs)
    {
        return empHrs * WAGE_PER_HOUR;
    }
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_OF_WORKING_DAYS )
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs += getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
    }
    console.log(empDailyWageMap);
    function totalWages(totalWage,dailyWage)
    {
        return totalWage + dailyWage;
    }
    console.log("UC - Emp Wage Map Totalhrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));

}
{
    //UC9 Arrow Function
    const findTotal =(totalVal , dailyVal) => 
    {
        return totalval + dailyVal;
    }
    let count = 0;
    let totalHours =Array.from(empDailyWageMap.values()).reduce(findTotal,0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage >0).reduce(findTotal,0);
    console.log("UC9A - Emp Wage With Arrow : " + " total Hours :" +
    totalHours + "TotalWages : " + totalSalary);
    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((values,key,map) => 
    {
        if(values == 8) fullWorkingDays.push(key);
        else if(values == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Full Working Days : " +fullWorkingDays);
    console.log("Part Working Dsys : "+partWorkingDays);
    console.log("Non Working Days : "+nonWorkingDays);
}
{
    //UC10 Object Creation
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArr = new Array();
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_OF_WORKING_DAYS )
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs += getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(
            {
                dayNum:totalWorkingDays,
                dailyHours:empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString()
                {
                    return '\nDay' + this.dayNum + '=> Working Hours is ' + this.dailyHours +
                    'And Wage Earned = '+ this.dailyWage
                },
         });
    }
    console.log("UC10 Showing Daily Hours Worked And WAge Earened :" +empDailyHrsAndWageArr);
}
{
    //UC11 
    class EmployeePayrollData1
    {
        //property
        id;
        salary;

        //constructor
        constructor(id,name,salary)
        {
            this.id =id ;
            this.name = name;
            this.salary =salary;
        }
        //getter and setter method 
        get name(){return this._name;}
        set name(name){this._name=name;}

        //method
        tostring()
        {
            return "id = " + this.id + ", name =" + this.name +" , salary = " + this.salary;
        }
    }
    let EmployeePayrollData1 =new EmployeePayrollData1(1,"Anurag",30000);
    console.log(EmployeePayrollData1.toString());
    EmployeePayrollData1.name =" Shanu";
    console.log(EmployeePayrollData1.toString());
}
{
    //UC12
    class EmployeePayrollData2
    {
        //property
        id;
        salary;
        gender;
        startDate;

        //constructor
        constructor(...parans)
        {
            this.id = parans[0] ;
            this.name = parans[1];
            this.salary = parans[2];
            this.gender = parans[3];
            this.startDate = parans[4];
        }

        //getter and setter method 
        get name(){return this._name;}
        set name(name){this._name=name;}

        //method
        tostring()
        {
            const option = { year: 'numeric' , month: 'long' ,day:'numeric'};
            const empData = this.startDate === undefined ? "undefined" : this.startDate.toLocalDataString("en-Ind",options);
            return "id = " + this.id + ", name =" + this.name +" , salary = " + this.salary + " , gender = " + this.gender + ", startDate = "+ this.empDate;
        }
    }
    let EmployeePayrollData2 =new EmployeePayrollData2(1,"Anurag",30000);
    console.log(EmployeePayrollData2.toString());
    EmployeePayrollData2.name =" Shanu";
    console.log(EmployeePayrollData2.toString());
    let newEmployeePayrollData2 = new EmployeePayrollData2(1,"Anu",30000,"T",new Data());
    console.log(newEmployeePayrollData2.toString());
}
{
    //UC13
    class EmployeePayrollData3
    {
        //property
        id;
        salary;
        gender;
        startDate;

        //constructor
        constructor(...parans)
        {
            this.id = parans[0] ;
            this.name = parans[1];
            this.salary = parans[2];
            this.gender = parans[3];
            this.startDate = parans[4];
        }

        //getter and setter method 
        get name(){return this._name;}
        set name(name)
        {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if(nameRegex.test(name))
            this._name =name;
            else throw "Name is Incorrect";
        }

        //method
        tostring()
        {
            const option = { year: 'numeric' , month: 'long' ,day:'numeric'};
            const empData = this.startDate === undefined ? "undefined" : this.startDate.toLocalDataString("en-Ind",options);
            return "id = " + this.id + ", name =" + this.name +" , salary = " + this.salary + " , gender = " + this.gender + ", startDate = "+ this.empDate;
        }
    }
    let EmployeePayrollData3 =new EmployeePayrollData3(1,"Anurag",30000);
    console.log(EmployeePayrollData3.toString());
    try 
    {
    EmployeePayrollData3.name =" Shanu";
    console.log(EmployeePayrollData3.toString());
    }
    catch(e)
    {
        console.error(e);
    }
    let newEmployeePayrollData3 = new EmployeePayrollData3(1,"Anu",30000,"T",new Data());
    console.log(newEmployeePayrollData3.toString());
}
