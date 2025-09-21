import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "vk4t70rq",
  dataset: "production",
  apiVersion: "2023-03-14", // keep your API version
  useCdn: true, // boolean, not string
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
