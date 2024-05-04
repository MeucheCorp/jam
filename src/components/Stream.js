import React, { useEffect } from 'react';
import './stream.css';

const Stream = ({ channel }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://player.twitch.tv/js/embed/v1.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const player = new window.Twitch.Player(channel, {
                channel,
                muted: true,
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [channel]);

    return <div class="single_pov" id={channel}></div>;
};

export default Stream;
