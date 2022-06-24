import { useMemo } from "react";

// sorting hook
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
    if (sort)
      return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));
    return posts; 
  }, [sort, posts]);

    return sortedPosts;
};

// returns filtred and sorted array of posts
export const usePosts = (posts, sort, query) => {
  // using prev users hook (sorting hook)
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
