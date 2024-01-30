
let age:number = 21;

if(age < 50 )
    age += 10
console.log(age)

let numArr:number[] = [ 0 , 1 , 3 ]

//tuple
let user:[number , string] = [1 , 'abi']

//enum
const enum Level { easy = 1 , medium , hard }

const myStage = Level.medium
console.log(myStage);


//functions
function checkVoteAge( age:number , name?:string ):string //return type 
{
    if(age >= 18)
    return `${(name || 'user')} eligible for vote`

    return `${name || 'user'} is not eligible for vote`
}
checkVoteAge(21)

//objects
let emp:{
    readonly id:number,
    name:string,
    passport?:boolean
} = { id : 1 , name : 'abi' }

//type aliyas
type Employee = Optional & {
    readonly id:number,
    name:string,
}

type Optional = {
    passport?:boolean
    married? : boolean
}

let emp1:Employee = {
    id:2,
    name:'ram',
    passport:true
}

emp1.name = 'ram'
// emp1.id = 22

//interface aliyas
interface Person extends Employee {
    age : number
}

// const person1:Person = {

// }

//union types
function kgToLbs( weight : number | string ){
    if(typeof weight === 'number')
        return console.log(weight * 2.2);
        
    else
        return console.log(parseInt(weight) * 2.2);
}

kgToLbs("71")


//literal types(excat , specific)
type Quantity = 50 | 100
let quantity:Quantity = 50

//nullabe type
function check( name:string | null ){
    if(name)
        console.log(name.toLocaleUpperCase());
    else 
        console.log('hakunamatata');
}

check(null)

//optional element access  operator
// customers?.[0] to avoid null as result

//optional call
// log.?() execute if it's a actual function  