import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {SETTING_ROUTE} from "../../../utils/consts";
import './style/navbar.css'
import logo from '../navbar/icon/logo.svg';
import dashboard from '../navbar/icon/dashboard.svg';
import transactions from '../navbar/icon/transactions.svg';
import accounts from '../navbar/icon/accounts.svg';
import investments from '../navbar/icon/investments.svg';
import credit from '../navbar/icon/credit cards.svg';
import loans from '../navbar/icon/loans.svg';
import services from '../navbar/icon/services.svg';
import privileges from '../navbar/icon/my privileges.svg';
import setting from '../navbar/icon/setting.svg';


const NavigationBar = () => {
    return (
        <div className='nav'>
            <Link to={SETTING_ROUTE}>
                <img src={logo} alt="logo" style={{ marginBottom: '59px' }}/>
            </Link>
            <ul className="nav-ul">
                <li>
                    <img src={dashboard} alt="dashboard"/>
                    <Link>Dashboard</Link>
                </li>
                <li>
                    <img src={transactions} alt="transactions"/>
                    <Link>Transactions</Link>
                </li>
                <li>
                    <img src={accounts} alt="accounts"/>
                    <Link>Accounts</Link>
                </li>
                <li>
                    <img src={investments} alt="investments"/>
                    <Link>Investments</Link>
                </li>
                <li>
                    <img src={credit} alt="credit"/>
                    <Link>Credit Cards</Link>
                </li>
                <li>
                    <img src={loans} alt="loans"/>
                    <Link>Loans</Link>
                </li>
                <li>
                    <img src={services} alt="services"/>
                    <Link>Services</Link>
                </li>
                <li>
                    <img src={privileges} alt="privileges"/>
                    <Link>My Privileges</Link>
                </li>
                <li>
                    <img src={setting} alt="setting"/>
                    <NavLink to={SETTING_ROUTE}>Setting</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavigationBar;