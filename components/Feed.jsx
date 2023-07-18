'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard 
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json();

      setPosts(data)
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredPosts(posts);
    } else {
      const filteredData = posts.filter((post) =>
        post.tag.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPosts(filteredData);
    }
  }, [searchText, posts]);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text'
          placeholder='카페를 #태그로 검색해보세요'
          value={searchText}
          onChange = {handleSearchChange}
          required
          className='search_input peer'
        />

        

      </form>
      <PromptCardList 
          data = {filteredPosts}
          handleTagClick={() => {}}

        />
    </section>
  )
}

export default Feed