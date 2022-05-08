import React from 'react';
import {Container} from "@mui/material";

const EmbedYoutubePartTwo = () => {
    return (
      <Container>
          <div className='content-embed-youtube'>
              <iframe className='controller-content max-width-articles'  src="https://www.youtube.com/embed/BRLmzQH-Hd4"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
          </div>
      </Container>
    );
};

export default EmbedYoutubePartTwo;