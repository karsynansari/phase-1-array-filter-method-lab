// Code your solution here
function findMatching(drivers, string) {
  const result = drivers.filter(
    (element) => element === string || element === string.toLowerCase()
  );
  return result;
}
function fuzzyMatch(driversName, string) {
  const nameFirstLetter = driversName.filter(
    (element) => element.slice(0, string.length) === string
  );
  return nameFirstLetter;
}

function matchName(driverObjects, aString) {
  const matchingDrivers = driverObjects.filter(
    (driver) => driver.name === aString
  );
  return matchingDrivers;
}
