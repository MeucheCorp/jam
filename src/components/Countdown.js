import React, { useState, useEffect } from 'react';
import './Countdown.css';

const remove_s = (word, value) => {
    if (value === 1)
        return word.substring(0, word.length - 1)
    else
        return word
}

function Countdown({ targetDate }) {
    const calculateTimeLeft = () => {
        let difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        let jam_has_started = false
        if (difference < 0) {
            difference += 48 * 60 * 60 * 1000;
            jam_has_started = true
        }
        if (difference > 0) {
            timeLeft = {
                Jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60),
                Secondes: Math.floor((difference / 1000) % 60)
            };
        }

        return [timeLeft, jam_has_started];
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    let is_first = true
    Object.keys(timeLeft[0]).forEach((interval) => {
        if (!timeLeft[0][interval] && is_first) {
            return;
        }
        is_first = false
        timerComponents.push(
            <span key={interval}>
                {timeLeft[0][interval]} {remove_s(interval, timeLeft[0][interval])}{' '}
            </span>
        );
    });
    if (timerComponents.length === 0) {
        return (<div>
            <div className="countdown-title">{"La jam est terminée ! On se retrouve pour la prochaine édition !"}</div>
        </div>
        );
    }
    else {
        return (<div>
            <div className="countdown-title">{!timeLeft[1] ? "La jam commence dans :" : "La jam se termine dans :"}</div>
            <div className="countdown-container">
                {timerComponents.map((component, index) => (
                    <div key={index} className="countdown-item">
                        {component}
                        {index < timerComponents.length - 1 && (
                            <div className="separator" />
                        )}
                    </div>
                ))}
            </div>
        </div>
        );
    }
}

export default Countdown;
