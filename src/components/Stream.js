import React, { useEffect } from 'react';
import './stream.css';

const Stream = ({ channel, name }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://player.twitch.tv/js/embed/v1.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            new window.Twitch.Player(channel, {
                channel,
                muted: true,
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [channel]);

    return <div class="streamer">
        <h3 class="text-overlay">{name || channel}</h3>
        <div class="single_pov" id={channel}></div>
    </div>
};

export default Stream;
