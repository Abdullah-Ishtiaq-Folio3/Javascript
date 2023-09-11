// A generic function which will simulate api, will return data when called according to the arguments received
function getDataFromApi(id, wait) {
  return (
    "Data returned by Api" +
    id.toString() +
    " after " +
    wait.toString() +
    " seconds"
  ).split(" ");
}

// A call to Api1 function, it sets timeout of 10 seconds.. after 10 seconds it gets data, print it and calls api2
function api1(startTime) {
  setTimeout(() => {
    data1 = getDataFromApi(1, 10);
    console.log(data1);
    return api2(startTime);
  }, 10000);
}

// A call to Api2 function, it sets timeout of 5 seconds.. after 5 seconds it gets data, print it and calls api3
function api2(startTime) {
  setTimeout(() => {
    data2 = getDataFromApi(2, 5);
    console.log(data2);
    return api3(startTime);
  }, 5000);
}

// A call to Api3 function, it sets timeout of 7 seconds.. after 7 seconds it gets data, print it and calculates time taken by whole process
// Start time was passed by main to api1, then api1 to api2 and at last api2 to api3
function api3(startTime) {
  setTimeout(() => {
    data3 = getDataFromApi(3, 7);
    console.log(data3);
    endTime = Date.now();
    console.log("Time Taken:", (endTime - startTime) / 1000, "seconds");
  }, 7000);
}

function script() {
  startTime = Date.now();
  api1(startTime);
}

script();
