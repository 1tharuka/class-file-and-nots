// nested functions = funtion inside oter fution,
//                    outer fution have access to ineer fution
//                    inner futions are 'hiden' from outside
//                    used in closures ()

let userName = 'Tharuka';
let UserId = 0;
log()

function log(){
    username();
    userid();
    function username(){
        console.log(userName)
    }
    function userid(){
        console.log(UserId)
    }
}