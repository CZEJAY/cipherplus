"use server"
import axios from 'axios';

export const GetRemoteJob = async (company: string = "shopify") => {
    const options = {
        method: 'GET',
        url: 'https://remote-jobs-api.p.rapidapi.com/jobs',
        params: {company},
        headers: {
          'X-RapidAPI-Key': '153747d565msh53c507f0a9fe569p163487jsne35155ec2a1e',
          'X-RapidAPI-Host': 'remote-jobs-api.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return [response.data]
      } catch (error) {
          console.error(error);
          return []
      }
}