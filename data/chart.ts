import { faker } from "@faker-js/faker";

export type Gender = {
  male: number[];
  female: number[];
  others: number[];
};

export const GenderAge = ["16-25", "25-35", "35-55", "55+"];

export const Weekdays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

// Define a function that generates an array of engagement rates for each weekday
export const createEngagementRateData: () => number[] = () => {
  // Return an array of engagement rates, each representing a weekday
  return Array.from({ length: Weekdays.length }, () =>
    faker.number.int({ min: 1, max: 100 })
  );
};

// Define a function that generates a Gender object with arrays of numbers representing the age ranges for each gender.
export const createGenderChart: () => Gender = () => {
  // Define a function that generates an array of numbers for a given gender and age range
  const generateAge = (gender: keyof Gender) => {
    // Return a new array of numbers with the length of GenderAge, where each number is a random integer between 16 and 100
    return Array.from({ length: Object.keys(GenderAge).length }, () =>
      faker.number.int({ min: 16, max: 100 })
    );
  };
  return {
    male: generateAge("male"),
    female: generateAge("female"),
    others: generateAge("others"),
  };
};
