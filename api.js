export async function fetchPosts() {
    try {
        const post = await fetch("/posts.json");
        const data = await post.json();
        // return Object.values(data);
        return data;
    }
    catch (error) {
        console.error("Error fetching from posts.json", error);
        return [];
    }

}

export async function fetchUsers() {
    try {
        const user = await fetch("/users.json");
        const data = await user.json();
        // return Object.values(data);
        return data;
    }
    catch (error) {
        console.error("Error fetching from users.json", error);
        return [];
    }

}
