interface Photo {
    id: number;
    src: {
      medium: string;
      original: string;
      [key: string]: string; // Diğer boyutlar için opsiyonel anahtar
    };
    photographer: string;
    url: string;
  }
  
  export const fetchPexelsData = async (
    query: string = "home decoration",
    perPage: number = 12
  ): Promise<Photo[]> => {
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY || "",
          },
        }
      );
  
      if (!res.ok) {
        throw new Error("API çağrısı başarısız oldu!");
      }
  
      const data: { photos: Photo[] } = await res.json();
      return data.photos;
    } catch (error) {
      console.error("API çağrısı hatası:", error);
      return [];
    }
  };
  