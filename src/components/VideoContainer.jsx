import VideoCard from './VideoCard';
import { useEffect, useState } from 'react';
import YOUTUBE_VIDEO_API from '../utils/constant';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      setVideos(data.items);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-wrap px-8 py-2'>
      {videos.length > 0 && videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+ video.id}>
          <VideoCard info={video} />
        </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
