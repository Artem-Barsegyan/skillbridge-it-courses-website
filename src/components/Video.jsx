import { useEffect, useRef } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css'
import '@videojs/themes/dist/fantasy/index.css'

import skillbridgeVideos from '../assets/home/hero/skillbridge.mp4';

const Video = () => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && !playerRef.current) {
            const videoElement = document.createElement("video-js");
            videoElement.classList.add('vjs-theme-fantasy', 'vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            playerRef.current = videojs(videoElement, {
                autoplay: false,
                controls: true,
                responsive: true,
                fluid: true,
                preload: 'auto',
                sources: [{
                    src: skillbridgeVideos,
                    type: 'video/mp4'
                }],
            });
        }
        return () => {
            if (playerRef.current && !playerRef.current.isDisposed()) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);
    return (
        <div data-vjs-player>
            <div ref={videoRef} />
        </div>
    )
}

export default Video;