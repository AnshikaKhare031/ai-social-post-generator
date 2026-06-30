export const getPosts = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
    return res.json();
};