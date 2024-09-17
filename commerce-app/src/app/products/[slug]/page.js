import Slug from "@/components/Slug";
import React from "react";

function SlugRoute({ params }) {
  console.log(params);
  return <Slug title={params.slug} />;
}

export default SlugRoute;
