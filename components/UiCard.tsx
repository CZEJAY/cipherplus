"use client";
import { uiCardType } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UiCard = () => {
  const [jobs, setJobs] = useState<uiCardType[] | any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/api/GetRemoteJob", {
        params: {
          company: "shopify",
        },
      })
      .then((response) => {
        setJobs(response.data.data.items);
        console.log(response.data.data.items);
        
        setLoading(true);
      })
      .catch((error: any) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {
        loading && jobs.length > 0 &&
          jobs.map((job: uiCardType) => {
            return (
              <div key={job.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h1 className="text-light-1">{job.company_name}</h1>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Load More
        </button>
      </div>
    </div>
  );
};

export default UiCard;
