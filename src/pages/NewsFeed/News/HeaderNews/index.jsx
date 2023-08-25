import TimesAgo from "../../../../utils/TimesAgo";
import React from "react";

export const HeaderNews = ({parentData}) => {
    return (
        <div className="header-news-component flex gap-2 items-center">
            <div className="avatar-container flex w-12 items-center justify-center h-12 rounded-full bg-gray-500">
                <img src={parentData.avatar} className='avatar-container flex w-12 items-center justify-center h-12 object-cover rounded-full bg-gray-500' alt="" />
            </div>
            <div className="meta-news-container flex flex-col gap-1">
                <span className="username leading-3 font-bold text-gray-700">{parentData.username}</span>
                <span className="text-xs text-gray-600 font-semibold">{TimesAgo(parentData.updatedAt)}</span>
            </div>
        </div>
    );
}