import React, {useContext, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import CommentPostModal from "../CommentPostModal";
import {FooterNews} from "./FooterNews";
import {HeaderNews} from "./HeaderNews";
import {getUserById} from "../../../utils/fetcher/users";
import {deleteAReaction, getReaction, sendReactionToPost} from "../../../utils/fetcher/reactions";
import {clientContext} from "../../../utils/context";


export function Index({data}) {
    const {userId} = useContext(clientContext);
    const [portal,setPortal] = useState(null);
    const [totalLike,setTotalLike] = useState(0);
    const [user, setUser] = useState({});
    const [liked, setLikes] = useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchUser = async () => {
        try{
            const userData = await getUserById(data.userId)
            const TotalLikePost = (
                await getReaction(data.id)
                    .then(v =>
                        v.filter(v => v.type.match(/like/i))
                            .length)
            );
            if(userData && TotalLikePost && !totalLike){
                setUser(userData);
                setTotalLike(TotalLikePost);
            }
        }catch(e){
            console.log(e)
        }
    }
    
    useEffect(() => {
        fetchUser().catch(e => {
            console.log(e);
        })
    })

    const handleLikeClick = () => {
        setTotalLike(value => {
            if(!liked){
                sendReactionToPost(data.id,{
                    userId,
                    type: "LIKE"
                })
                    .then(v => {
                        console.log(v);
                    })
                    .catch(e => {
                        console.log(e);
                    })
                return value + 1;
            }else{
                deleteAReaction(data.id,{
                    type: "LIKE",
                    userId
                })
                    .then(v => {
                        console.log(v);
                    })
                    .catch(e => {
                        console.log(e);
                    })
                return value - 1;
            }
        })
        setLikes(!liked);
    }

    const [openedComment,setOpenComment] = useState(false);

    const handleCloseModal = () => {
        setPortal(null);
    }

    const handleClickComment = () => {
        setOpenComment(!openedComment);
        setPortal(
            createPortal(
                <CommentPostModal onClose={handleCloseModal}
                                  parentProps={{
                                      data: data,
                                      user: user
                                  }}
                />,
                document.getElementById("portal-comment")
            )
        )
    }

    return (
        <section
            className="news-component flex bg-white flex-col p-4 gap-4 border rounded-xl"
            id="multiplier"
        >

            <HeaderNews
                parentData={
                    {
                        username: user.username,
                        avatar: user.photo,
                        updatedAt: data.updatedAt
                    }
                }
            />

            <div className="news-content">
                <div className="font-semibold text-lg">{data.title}</div>
                <div className="text-container">{data.content}</div>
            </div>

            <FooterNews
                parentProps={
                    {
                        handleLikeClick,
                        handleClickComment,
                        openedComment,
                        liked,
                        totalLike
                    }
                }
            />

            { portal }
        </section>
    )
}
