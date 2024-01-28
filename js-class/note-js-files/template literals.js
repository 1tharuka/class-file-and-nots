/*template literals = delimited with()
                    instead of double of single quotes
                    allows embedded veiables ad expreessing
                    */

let userName = 'Tharuka' ;
let items = 3;
let price = 30;
document.getElementById('mylable').innerHTML = (`You Name ${userName} and You items ${items} Coste $${price}`);
