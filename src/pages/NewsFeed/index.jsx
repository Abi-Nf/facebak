import {useEffect, useState} from "react";
import {Index} from "./News";
import {getPosts} from "../../utils/fetcher/posts";

export const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try{
            return await getPosts();
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPosts().then(posts => {
            setPosts(posts)
        });
    }, [])

    return (
        <div className="w-full flex mt-14" id="portal-comment">
            <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
                <div className="asidePadded w-100"></div>
            </aside>

            <main className="mainPage flex flex-col gap-4 w-full">
                {posts.map(post => {
                    return (
                        <Index key={post.id} data={post}/>
                    );
                })}
            </main>

            <aside className="asideEmpty w-3/12 flex-shrink-0 p-2 h-screen">
                <div className="asidePadded w-100"></div>
            </aside>
        </div>
    );
}