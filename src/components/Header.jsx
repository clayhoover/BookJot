import React from "react";
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import { makeStyles } from '@material-ui/core/styles';


function Header() {
    return (
        <header>
            <BookmarkOutlinedIcon className="icon2" style={{ fontSize: 110 }} />
            <h1>BookJot</h1>
            <ImportContactsOutlinedIcon  className="icon" fontSize="large" />
        </header>
    );
}

export default Header;