import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="http://">
                    <img src="https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo-png-1024x456.png" alt="Netflix" />
                </a>
            </div>
<div className="header--user">
    <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/180px-Netflix-avatar.png" alt="Usuário" />
    </a>
</div>
        </header>
    );
}