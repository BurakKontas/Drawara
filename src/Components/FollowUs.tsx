import React from 'react';
import { SocialIcon } from 'react-social-icons';

const urls = ["https://discord.gg/", "https://twitter.com", "https://facebook.com", "https://telegram.com"]

export const FollowUs = () => {
    return (
        <div style={{display:"flex", gap:10 }}>
            {urls.map((url) => <SocialIcon key={url} url={url} />)}
        </div>
    )
}