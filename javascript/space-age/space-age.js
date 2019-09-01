export const age = (planet, age) => {
  return roundtoDecimals(age/(EARTH_YEAR_SECONDS * ORBITAL_PERIOD[planet]));
};

const roundtoDecimals = val => Math.round(val * 100) / 100;

const EARTH_YEAR_SECONDS = 31557600;

const ORBITAL_PERIOD = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};
