import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const company = searchParams.get("company");

  const options = {
    method: "GET",
    url: "https://remote-jobs-api.p.rapidapi.com/jobs",
    params: { company: "shopify" },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "remote-jobs-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return NextResponse.json({ data }, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// export const GET = async (NextRequest, NextResponse) => {
//   const searchParams = NextRequest.query;
//   console.log(searchParams);

//   const options = {
//     method: "GET",
//     url: "https://remote-jobs-api.p.rapidapi.com/jobs",
//     params: { company: "shopify" },
//     headers: {
//       "X-RapidAPI-Key": "153747d565msh53c507f0a9fe569p163487jsne35155ec2a1e",
//       "X-RapidAPI-Host": "remote-jobs-api.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.status(500).json({ message: "Internal server error" });
//   }
// };
