import React, { Component } from 'react';
import "./LinkList.css";

class LinkList extends Component<{props:any}>  {
    // console.log( props);
    
 
    
     linkMarkup = this.props.options.map((link:any) => (
        <li key={link.id} className="link-list-item">
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            >
                {link.text}
            </a>
        </li>
    ));
    render() {
    
        return (
         <ul className="link-list">{this.linkMarkup}</ul>)
    }
    
};
export default LinkList;
