import React from 'react';

const SectionEmbedYoutubeRl = () => {
    return (
        <div className='content-embed-youtube-RL  '>
            <h2 className='style-global-title text-left'>You Tube Video</h2>
            <iframe   className='controller-content ' src="https://www.youtube-nocookie.com/embed/21oUVHhbhws"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default SectionEmbedYoutubeRl;