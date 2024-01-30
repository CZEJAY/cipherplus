"use client";
import { uiCardType } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { generateJobs } from "@/lib/utils";
import clsx from "clsx";

const UiCard = () => {
  // const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const jobs = generateJobs()
  // useEffect(() => {
  //   axios
  //     .get("/api/GetRemoteJob", {
  //       params: {
  //         company: "shopify",
  //       },
  //     })
  //     .then((response) => {
  //       setJobs(response.data.data.items);
  //       console.log(response.data.data);

  //       setLoading(true);
  //     })
  //     .catch((error: any) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  return (
    <div className="w-full items-center px-4">
      <div className="flex items-center">
        <Carousel className="" plugins={[Autoplay({ delay: 10000 })]}>
          <CarouselContent className="-ml-2 flex gap-2 md:-ml-4">
            {jobs.map((job: uiCardType) => (
              <CarouselItem key={job.id} className={clsx(`p-2 md:pl-4 border rounded bg-url(${job.image})`,
              )}>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <Image
                      width={100}
                      height={100}
                      src={job.company_logo}
                      alt="company logo"
                      className="w-8 h-8 rounded-full"
                    />{" "}
                    <h2 className="text-xl font-bold">{job.title}</h2>
                  </div>
                  <p className="text-sm">{job.company_name}</p>
                  <p className="text-sm">{job.location}</p>
                  <p className="text-sm">{job.date}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
};

export default UiCard;
