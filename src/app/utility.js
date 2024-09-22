"use server";
export async function getNewsData() {
    const res = await fetch(
      `https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`
    );
    const data = await res.json();
    const result = data.articles;
    
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return result;
  }