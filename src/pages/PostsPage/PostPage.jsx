import React, { useEffect, useState } from 'react';
import { PostService } from '../../API/PostService/PostService';
import { Loader } from '../../components/Loader/Loader';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { PaginationsContainer } from '../../components/PaginationsContainer/PaginationsContainer';
import { PostFilter } from '../../components/PostFilter/PostFilter';
import { PostForm } from '../../components/PostForm/PostForm';
import { PostList } from '../../components/PostList/PostList';
import { Button } from '../../components/UI/Button/Button';
import { useFetching } from '../../hooks/useFetching';
import { usePosts } from '../../hooks/usePosts';
import { getPageCount, getXTotalCount } from '../../Utils/pages';

export const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  //  выбранный алгоритм сортировки и поисковая строка
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  //используем свои хуки
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getPagesResponse(limit, page);
    setPosts(response.data);
    const totalCount = getXTotalCount(response);
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const onClickChangePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };
  
  //  callback, для получения нового поста в  массиве
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModalActive(false);
  };
  //  получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  return (
    <div className="App">
      <Button style={{marginTop: 30}} onClick={() => setIsModalActive(true)} >
        create post
      </Button>
      <ModalWindow visible={isModalActive} setVisible={setIsModalActive} >
        <PostForm create={createPost} />
      </ModalWindow> 
      <hr style={{margin: 20}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && 
        <h1>Erorr: ${postError}</h1>
      }
      {isPostLoading ? 
        <Loader /> :
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts List:" />
      }
      <PaginationsContainer
        totalPages={totalPages}
        page={page}
        changePage={onClickChangePage}
      />
    </div>
  );
};