// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// export function getSortedPosts() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map(fileName => {
//     const slug = fileName.replace(/\.mdx$/, '');
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const { data, content } = matter(fileContents);

//     return {
//       slug,
//       ...data,
//       content
//     };
//   });

//   return allPostsData.sort((a, b) => {
//     return new Date(b.date) - new Date(a.date);
//   });
// }

// export function getAllPostSlugs() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map(fileName => ({
//     params: {
//       slug: fileName.replace(/\.mdx$/, '')
//     }
//   }));
// }

// export async function getPostData(slug) {
//   const fullPath = path.join(postsDirectory, `${slug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);

//   return {
//     slug,
//     ...data,
//     content
//   };
// }


// import matter from 'gray-matter';

// // Import all your MDX files (you'll need to add new imports when adding posts)
// import post1 from '../content/blog/top-luxury-villas-in-bali.mdx';
// import post2 from '../content/blog/villa-vacation-packing-guide.mdx';

// const posts = [
//   { slug: 'top-luxury-villas-in-bali', ...matter(post1).data, content: matter(post1).content },
//   { slug: 'villa-vacation-packing-guide', ...matter(post2).data, content: matter(post2).content }
// ];

// export function getSortedPosts() {
//   return posts.sort((a, b) => {
//     return new Date(b.date) - new Date(a.date);
//   });
// }

// export function getAllPostSlugs() {
//   return posts.map(post => ({
//     params: {
//       slug: post.slug
//     }
//   }));
// }

// export function getPostData(slug) {
//   return posts.find(post => post.slug === slug);
// }



// import matter from 'gray-matter';

// // Import raw MDX content
// import post1 from '!!raw-loader!../content/blog/top-luxury-villas-in-bali.mdx';
// import post2 from '!!raw-loader!../content/blog/villa-vacation-packing-guide.mdx';

// const processPost = (rawContent) => {
//   const { data, content } = matter(rawContent);
//   return { ...data, content };
// };

// const allPosts = [
//   { slug: 'top-luxury-villas-in-bali', ...processPost(post1) },
//   { slug: 'villa-vacation-packing-guide', ...processPost(post2) }
// ];

// export const getSortedPosts = () => {
//   return [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
// };

// export const getAllPostSlugs = () => {
//   return allPosts.map(post => ({ slug: post.slug }));
// };

// export const getPostData = (slug) => {
//   return allPosts.find(post => post.slug === slug);
// };



// import post1 from '../content/blog/top-10-villas-bali-2025.json';

// const allPosts = [post1];

// export const getSortedPosts = () => {
//   return [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
// };

// export const getAllPostSlugs = () => {
//   return allPosts.map(post => ({ slug: post.slug }));
// };

// export const getPostData = (slug) => {
//   return allPosts.find(post => post.slug === slug);
// };







// src/lib/posts.js

const requirePost = require.context('../content/blog', false, /\.js$/);

const allPosts = requirePost.keys().map((fileName) => {
  const post = requirePost(fileName).default;
  return post;
});

export const getSortedPosts = () => {
  return [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getAllPostSlugs = () => {
  return allPosts.map(post => ({ slug: post.slug }));
};

export const getPostData = (slug) => {
  return allPosts.find(post => post.slug === slug);
};
