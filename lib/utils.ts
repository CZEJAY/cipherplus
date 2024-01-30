import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";
import { uiCardType } from "@/types";

export function createRandomJob(numberOfJobs: number = 5): uiCardType {
  return {
    title: faker.company.name(),
    company_logo: faker.image.urlLoremFlickr(),
    company_name: faker.company.name(),
    location: faker.location.city(),
    _id: faker.string.uuid(),
    id: faker.string.uuid(),
    date: faker.date.past().toDateString(),
    image: faker.image.urlPicsumPhotos()
  };
}

export function generateJobs(numberOfJobs: number = 5): uiCardType[] {
  return Array.from({ length: numberOfJobs }, createRandomJob);
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// for (let i = 0; i < numberOfJobs; i++) {
//   jobs.push(createRandomJob());
// }
// return jobs;