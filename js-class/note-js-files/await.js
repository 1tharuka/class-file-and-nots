// awatit =  makes an async funtion wait for a promise


async function fileLOde() {
    let fileLOde = true;
    if (fileLOde) {
      resolve("file lodes");
    } else {
      rejected("no file lodes");
    }
  }
  
  fileLOde().then((value) => console.log(value))
            .catch((error) => console.log(error));
  