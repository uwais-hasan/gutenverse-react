import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed'

const SectionEmbedInstagramPartTwoRl = () => {
    return (
        <div className='SectionEmbedInstagramPartTwoRl margin-top-40'>
            <h2 className='style-global-title padding-none '>Twitter Embed</h2>
            <TwitterTweetEmbed
                // Here goes your copied ID.
                tweetId={"701731155016552448"}
                // Style options goes here:
                optins={{width: "100%",height:'200px'}}
            />
            <p className='style-global-text-info margin-top-40'>
                At first, the steel went round and round, quivering and vibrating at either end; but at
                last it settled to its place, when Ahab, who had been intently watching for this result,
                stepped frankly back from the binnacle, and pointing his stretched arm towards it, exclaimed,—”Look ye,
                for yourselves, if Ahab be not lord of the level loadstone! The sun is East, and that compass swears it!”
<br/><br/>
                One after another they peered in, for nothing but their own eyes could persuade such ignorance as
                theirs, and one after another they slunk away. In his fiery eyes of scorn and triumph,
                you then saw Ahab in all his fatal pride.
            </p>
        </div>
    );
};

export default SectionEmbedInstagramPartTwoRl;