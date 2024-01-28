// break = beaks out of a loop entirely
// continue = skip an iteraion of a loop

for (let i= 1; i <= 20; i+=1) {
    if(i === 13) {
      break;
    }
    console.log(i);
    
}

for (let i= 1; i <= 20; i+=1) {
    if(i === 13) {
      continue;
    }
    console.log(i);
    
}