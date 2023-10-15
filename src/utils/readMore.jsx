'use client'
import React, { useState } from "react";
export function ReadMore({ content, moreContent }) {

    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the read more/less state
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            {content}
            <div onClick={() => toggleReadMore()}>{isExpanded ? 'Read Less' : 'Read More'}</div>
            <div className="">{moreContent}</div>
        </div>
    );
}
