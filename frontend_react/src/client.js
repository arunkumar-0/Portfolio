import {createClient} from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
    projectId: 'vk4t70rq',
    dataset: 'production',
    apiVersion: '2023-03-14',
    useCdn: 'true',
    token: process.env.REACT_APP_SANITY_TOKEN ,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);