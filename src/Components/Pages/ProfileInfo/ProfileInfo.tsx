import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://static4.depositphotos.com/1001944/371/i/600/depositphotos_3717756-stock-photo-fire-isolated-over-black-background.jpg"
                    alt="Картинка"/>
            </div>
            <div className={s.discriptionBlock}>
                ава+discription
            </div>
        </div>
    );
}

