import React, { useEffect } from 'react';

const TwitchEmbed = ({ channel }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://player.twitch.tv/js/embed/v1.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            new window.Twitch.Player("twitch-embed", {
                channel
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [channel]);

    return <div id="twitch-embed"></div>;
};

export default TwitchEmbed;
