'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'


function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the earth in kilometers

  // Convert latitude and longitude to radians
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  // Calculate the differences between the latitudes and longitudes
  const latDiff = lat2Rad - lat1Rad;
  const lonDiff = lon2Rad - lon1Rad;

  // Use the Haversine formula to calculate the distance
  const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
    Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

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
      const response = await fetch('/api/prompt');
      const data = await response.json();
      // navigator.geolocation.getCurrentPosition((position) => {
      //   const { latitude, longitude } = position.coords;
      //   const postsWithDistance = data.map((post) => {
      //     const distance = calculateDistance(latitude, longitude, 37, 128);
      //     const updatedLocation = { ...post.location, distance };
      //     return { ...post, location: updatedLocation };
      //   });
      //   console.log(postsWithDistance)
      //   setPosts(postsWithDistance);
      // });
      setPosts(data)
    };
  
    fetchPosts();
  }, []);
  
  

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch('/api/prompt')
  //     const data = await response.json();
  //     navigator.geolocation.getCurrentPosition((position)=>{
  //     console.log(position.coords.latitude)
  //     console.log(position.coords.longitude)
  //     console.log(calculateDistance(position.coords.latitude, position.coords.longitude, 36, 128))
  //     })
      

  //     setPosts(data)
  //   }

  //   fetchPosts();
  // }, []);

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