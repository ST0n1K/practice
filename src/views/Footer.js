import React from 'react';
import facebook from '../images/facebook (1).svg';
import instagram from '../images/instagram.svg';
import telegram from '../images/telegram.svg';

export default function Footer() {
    return (
        <div className="wrapper-footer">
                <div className="created-by">
                    <p>Made by ST0n1K</p>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100009336155167"><img src={facebook} alt='facebook'></img></a>
                    <a href="https://www.instagram.com/ston1k.zz/"><img src={instagram} alt='instagram'></img></a>
                    <a href="https://t.me/ST0n1K"><img src={telegram} alt='telegram'></img></a>
                </div>
        </div>
    )
}
