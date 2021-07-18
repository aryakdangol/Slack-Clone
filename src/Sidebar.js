import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SideBarOption from "./SidebarOption"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(()=> {
        //Run this code when the sidebar component
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc=> ({
                    id: doc.id,
                    name: doc.data().name,

                }))
            )
        ))
    },[])

    return (
        <div className = "sidebar">
            <div className="sidebar-header">
                <div className="sidebar-info">
                    <h2>Slack Clone</h2>
                    <h3><FiberManualRecordIcon />{user?.displayName}</h3>
                </div>
                <CreateIcon />
            </div>
            <SideBarOption Icon = {InsertCommentIcon} title = "Threads" />
            <SideBarOption Icon = {InboxIcon} title = "Mentions & reactions" />
            <SideBarOption Icon = {DraftsIcon} title = "Saved items" />
            <SideBarOption Icon = {BookmarkBorderIcon} title = "Channel browser" />
            <SideBarOption Icon = {PeopleAltIcon} title = "People & user groups" />
            <SideBarOption Icon = {AppsIcon} title = "Apps" />
            <SideBarOption Icon = {FileCopyIcon} title = "File browser" />
            <SideBarOption Icon = {ExpandLessIcon} title = "Show less" />
            <hr />
            <SideBarOption Icon = {ExpandMoreIcon} title = "Channels" /> 
            <hr />
            <SideBarOption Icon = {AddIcon} title = "Add Channel" addChannelOption />

            {channels.map(channel => (
                <SideBarOption title = {channel.name} id = {channel.id} />
            ))}


        </div>
    )
}

export default Sidebar
