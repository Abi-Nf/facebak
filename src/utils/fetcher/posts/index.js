import {getRequest, postRequest} from "../methods";

const host = 'http://localhost:8080';
export const getPosts = async () => {
    return await getRequest(`${host}/posts`)
}

export const getPostById = async (uuid) => {
    return await getRequest(`${host}/posts/${uuid}`);
}

export const createPostOrUpdate = async (post) => {
    return await postRequest(`${host}/posts`, post);
}

export const postComment = async (postId,content) => {
    return await postRequest( `${host}/posts/${postId}/comments`, {postId, content} );
}

export const getCommentById = async (postId) => {
    return getRequest(`${host}/posts/${postId}/comments` );
}