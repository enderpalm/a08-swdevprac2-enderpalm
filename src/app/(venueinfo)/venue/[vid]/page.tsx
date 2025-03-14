import React from "react";
import Image from "next/image";
import getVenue from "@/libs/getVenue";

const VenueDetailPage = async ({ params }: { params: { vid: string } }) => {
  // const mockVenueRepo = new Map();
  // mockVenueRepo.set("001", {
  //   name: "The Bloom Pavilion",
  //   image: "/img/bloom.jpg",
  // });
  // mockVenueRepo.set("002", {
  //   name: "Spark Space",
  //   image: "/img/sparkspace.jpg",
  // });
  // mockVenueRepo.set("003", {
  //   name: "The Grand Table",
  //   image: "/img/grandtable.jpg",
  // });
  const venueDetail = await getVenue(params.vid);

  return (
    <>
      {venueDetail.data && (
        <main className="flex flex-wrap justify-center gap-2 m-4">
          <div className="w-80 rounded-lg overflow-hidden relative aspect-[3/2] shadow-md">
            <Image
              src={venueDetail.data.picture}
              alt={venueDetail.data.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 m-4">
            <h1 className="font-anuphan font-medium text-2xl">
              {venueDetail.data.name}
            </h1>
            <div className="flex font-jetbrains gap-4 flex-wrap">
              <span>{venueDetail.data.address}</span>
              <span>●</span>
              <span>{venueDetail.data.district}</span>
              <span>●</span>
              <span>{venueDetail.data.province}</span>
              <span>{venueDetail.data.postalcode}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-jetbrains bg-black text-white w-fit px-2 py-1 mt-2 rounded-md">
                {venueDetail.data.dailyrate}฿ / day
              </span>
              <span className="font-jetbrains w-fit px-2 py-1 mt-2 rounded-md border-solid border-2 border-black">
                {venueDetail.data.tel}
              </span>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default VenueDetailPage;
