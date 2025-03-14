"use client";

import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

const VenuesPage = () => {
  const venuesPromise = getVenues();

  return (
    <main>
      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <VenueCatalog venuesJson={venuesPromise} />
      </Suspense>
    </main>
  );
};

export default VenuesPage;
