// A generic function which receives api id and time to wait
// It returns promise and wait for the time passed as an argument to send data back
function getDataFromApiAsync(id, wait) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        (
          "Data returned by Api" +
          id.toString() +
          " after " +
          wait.toString() +
          " seconds"
        ).split(" ")
      );
    }, wait * 1000);
  });
}

// A function simulating api1 call, it waits for the data for being fetched and then display it, it returns time at the end of the function call
async function api1(startTime) {
  data = await getDataFromApiAsync(1, 10);
  console.log(data);
  return Date.now();
}
// A function simulating api2 call, it waits for the data for being fetched and then display it, it returns time at the end of the function call
async function api2(startTime) {
  data = await getDataFromApiAsync(2, 5);
  console.log(data);
  return Date.now();
}
// A function simulating api3 call, it waits for the data for being fetched and then display it, it returns time at the end of the function call
async function api3(startTime) {
  data = await getDataFromApiAsync(3, 7);
  console.log(data);
  return Date.now();
}

// A function which implements async script for these 3 api calls
async function asyncScript() {
  startTime = Date.now();
  // Promise.all waits for all the promises to be resolved
  const values = await Promise.all([api1(), api2(), api3()]);

  let endTime;
  // Checking which endtime is the latest one, because that is the end time of our simulation
  if (values[0] > values[1] && values[0] > values[2]) endTime = values[0];
  if (values[1] > values[0] && values[1] > values[2]) endTime = values[1];
  if (values[2] > values[1] && values[2] > values[0]) endTime = values[2];

  console.log("Time Taken:", (endTime - startTime) / 1000, "seconds");
}

asyncScript();
