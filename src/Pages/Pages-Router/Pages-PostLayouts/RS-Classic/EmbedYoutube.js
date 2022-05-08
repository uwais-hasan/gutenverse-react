import React from 'react';

const EmbedYoutube = () => {
    return (
        <div className='content-embed-youtube'>
            <iframe className='controller-content '  src="https://www.youtube.com/embed/BRLmzQH-Hd4"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default EmbedYoutube;