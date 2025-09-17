function distanceFromHqInBlocks(pickupLocation) {
  const hq = 42; // Scuber HQ is at 42nd Street
  return Math.abs(pickupLocation - hq);
}

function distanceFromHqInFeet(pickupLocation) {
  const blockInFeet = 264;
  return distanceFromHqInBlocks(pickupLocation) * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const blockInFeet = 264;
  return Math.abs(destination - start) * blockInFeet;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // free sample
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};

