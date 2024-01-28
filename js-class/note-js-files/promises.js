// promises = object that encapsulates the result an asynchronous operation
//            let asynchronous methods return values like synchronous methds
//"I promise to return someting in the  future  "

//  the State is 'pending' then:'fulfilled' or 'rejected'
//  the result is what can be returned
// 2 parts producing & consuming

const promeser = new Promise((resolve,rejected) => {
    let fileLOde = false;
    if(fileLOde){
        resolve("file lodes");
    }else{
        rejected("no file lodes")
    }
});

promeser.then(Value => console.log(Value)).catch(error => console.log(error));