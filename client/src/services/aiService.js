export const generatePost = async (topic) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/generate-post?topic=${topic}`,
      {
        method: "POST"
      }
    );

    const data = await response.json();
    return data.result;

  } catch (error) {
    console.error("Error generating post:", error);
    return "Something went wrong.";
  }
};