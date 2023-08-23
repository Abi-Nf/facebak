import React, {useEffect, useRef} from "react";
import TimesAgo from "../../../../utils/TimesAgo";
import {FaUser} from "react-icons/fa";
import axios from "axios";

export const HeaderNews = ({parentData}) => {
    const isFetchedImage = useRef(false);

    useEffect(() => {
        axios.get(parentData.avatar)
            .then(() => {
                isFetchedImage.current = true;
            })
            .catch(e => {
                console.log(e.message);
            });
    },[isFetchedImage, parentData.avatar]);

    return (
        <div className="header-news-component flex gap-2 items-center">
            <div className="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-500">
                {
                    isFetchedImage.current
                        ? <img src={parentData.avatar} className='avatar-container flex w-12 items-center justify-center h-12 object-cover rounded-full bg-gray-500'
                               alt="Profile" />
                        : <FaUser className="w-6 h-6 text-white"/>
                }
            </div>
            <div className="meta-news-container flex flex-col gap-1">
                <span className="username leading-3 font-bold text-gray-700">{parentData.username}</span>
                <span className="text-xs text-gray-600 font-semibold">{TimesAgo(parentData.updatedAt)}</span>
            </div>
        </div>
    );
}