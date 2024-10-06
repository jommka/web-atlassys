import React from 'react';
import './style/setting.css'
import setting from './icon/settings.svg'
import notification from './icon/notification.svg'
import avatar from './icon/avatar.svg'
import search from './icon/search.svg'
import pencil from './icon/pencil.svg'
import menu from './icon/menu.svg'

import {Link, NavLink} from "react-router-dom";

const Setting = () => {
    return (
        <main>
            <div className='header' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <img src={menu} alt="menu" className='header-menu'/>
                <h1>Setting</h1>
                <div className='main-container'>
                    <form action="" className='form-search'>
                        <button type="submit"><img src={search} alt="search"/></button>
                        <input name="s" placeholder="Search for something" type="search"/>
                    </form>
                    <button className='setting-button'>
                        <img src={setting} alt="setting"/>
                    </button>
                    <button className='setting-button'>
                        <img src={notification} alt="notification"/>
                    </button>
                    <img src={avatar} alt="avatar" className='avatar'/>
                </div>
            </div>

            <div className='profile-container'>
                <ul className='profile-ul'>
                    <li><NavLink activeClassName="active">Edit Profile</NavLink></li>
                    <li><Link>Preferences</Link></li>
                    <li><Link>Security</Link></li>
                </ul>
                <div className='profile'>
                    <div style={{position: 'relative'}}>
                        <img src={avatar} alt="avatar" className='profile-avatar'/>
                        <button className='profile-button_edit'>
                            <img src={pencil} alt="avatar" className='edit'/>
                        </button>
                    </div>
                    <form className='form'>
                        <div className="block-input">
                            <label>Your Name</label>
                            <input type="text" placeholder='Charlene Reed' required spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>Email</label>
                            <input type="email" placeholder='charlenereed@gmail.com' required
                                   spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>Date of Birth</label>
                            <input type={'text'} placeholder='25 January 1990' required spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>Permanent Address</label>
                            <input type={'text'} placeholder='San Jose, California, USA' required
                                   spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>Postal Code</label>
                            <input type={'text'} placeholder='45962' required spellCheck="false"></input>
                        </div>
                    </form>
                    <form className='form'>
                        <div className="block-input">
                            <label>User Name</label>
                            <input type="text" placeholder='Charlene Reed' required spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>Password</label>
                            <input type="password" placeholder='**********' required
                                   spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>Present Address</label>
                            <input type={'text'} placeholder='San Jose, California, USA' required
                                   spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>City</label>
                            <input type={'text'} placeholder='San Jose' required
                                   spellCheck="false"></input>
                        </div>
                        <div className="block-input">
                            <label>Country</label>
                            <input type={'text'} placeholder='USA' required spellCheck="false"></input>
                        </div>
                    </form>
                    {/*<div className='profile-info'>*/}

                    {/*</div>*/}
                </div>
                <button className='profile-button_save'>Save</button>
            </div>
        </main>
    );
};

export default Setting;