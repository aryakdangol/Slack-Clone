import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className = "header">
            <div className = "header-left">
                <Avatar
                    className = "header-avatar" src ={user?.photoURL} alt = {user?.dsplayName} />
                <AccessTimeIcon />
            </div>
            <div className="header-search">
                <SearchIcon />
                <input placeholder = "Search Slack-Clone" type = "text" />
            </div>
            <div className="header-right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
