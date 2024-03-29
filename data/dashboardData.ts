import { faker } from "@faker-js/faker";

// Define a type for Performance Metrics Titles
type PerformanceMetricsTitle = "Followers" | "Likes" | "Comments";

// This interface specifies the structure of an object that represents post activity data.
export interface PostActivityData {
  imgURL: string;
  content: string;
  date: string;
  veiwCount: number;
}

// Create an interface for Performance Metric Data
export interface PerformanceMetricData {
  // The title of the performance metric, which can only be one of the following: "Followers", "Likes", or "Comments"
  title: PerformanceMetricsTitle;
  // The record or count of the performance metric
  record: number;
  // The percentage increase of the performance metric
  incPerc: number;
}

export interface LocationVisitorData {
  location: string;
  noOfVisitor: number;
  incPer: number;
}

// Define a function that creates an array of PerformanceMetricData objects
export const createPerformanceMetricData: () => PerformanceMetricData[] =
  () => {
    // Map over the array of performance metric titles and return a new object for each title
    return ["Followers", "Likes", "Comments"].map((val) => {
      return {
        // Set the title of the performance metric
        title: val as PerformanceMetricsTitle,
        // Generate a random integer for the record between 20,000 and 99,999
        record: faker.number.int({ min: 20000, max: 99999 }),
        // Generate a random integer for the percentage increase between 0.1 and 100
        incPerc: faker.number.int({ min: 0.1, max: 100 }),
      };
    });
  };

/**
 * The function `createPostActivityData` generates an array of post activity data with random image
 * URLs, content, dates, and view counts using faker library.
 * @param {number} [noOfRecord=5] - The `noOfRecord` parameter in the `createPostActivityData` function
 * specifies the number of post activity data objects to generate. By default, if no value is provided
 * when calling the function, it will generate 5 post activity data objects.
 * @returns {Array<PostActivityData>} An array of PostActivityData objects is being returned. Each object in the array contains
 * properties such as imgURL (a URL to an image generated by faker), content (lorem ipsum text
 * generated by faker), date (a recent date formatted as "DD MMM" using faker), and veiwCount (a random
 * integer generated by faker with a minimum value of 2000). The number of objects
 */
export const createPostActivityData: (
  noOfRecord?: number
) => PostActivityData[] = (noOfRecord = 5) => {
  return Array.from({ length: noOfRecord }, () => ({
    imgURL: faker.image.url(),
    content: faker.lorem.lines({ min: 2, max: 6 }),
    date: faker.date
      .recent()
      .toLocaleDateString("en-US", { day: "2-digit", month: "short" }),
    veiwCount: faker.number.int({ min: 2000, max: 1000000 }),
  }));
};

/**
 * This function creates an array of LocationVisitorData objects with randomly generated
 * location, number of visitors, and increase percentage based on the input number of records.
 * @param {number} noOfRecord - The `noOfRecord` parameter specifies the number of records you want to generate
 * in the `LocationVisitorData` array.
 * @returns {Array<LocationVisitorData>} An array of LocationVisitorData objects is being returned. Each object in the array
 * contains three properties: location (a randomly generated country name using faker), noOfVisitor (a
 * randomly generated integer between 0 and 1000 using faker), and incPer (a randomly generated integer
 * between 0.1 and 100 using faker). The number of objects in the array is determined by the `no
 */
export const createLocationVistorData: (
  noOfRecord?: number
) => LocationVisitorData[] = (noOfRecord = 5) => {
  return Array.from({ length: noOfRecord }, () => ({
    location: faker.location.country(),
    noOfVisitor: faker.number.int({ min: 1000, max: 1000000 }),
    incPer: faker.number.int({ min: 0.1, max: 100 }),
  }));
};
