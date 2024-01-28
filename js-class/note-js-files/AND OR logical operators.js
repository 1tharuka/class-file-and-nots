/* AND OR logical operators && ||={
Gives us the ability to check more the ! condition concurrentle
&& and (Both conditions must be true)
|| or(either condition can true)
}
*/

let temp = 15;
let sune = true;
if(temp >=0 && temp <=30 && sune) {
 console.log('You temp Goood')
}else{
    console.log('You temp bade')    
}

if(temp > 0 || temp <30 && sune) {
    console.log('You temp Good')
   }else{
       console.log('You temp bade')    
   }