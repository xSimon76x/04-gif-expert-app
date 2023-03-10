
import { useState, useEffect } from "react";
import { getGift } from '../helpers/getGift';

export const useFetchGift = (imageSearch) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        const imagesGift = await getGift(imageSearch);
        setImages(imagesGift);
        setIsLoading(false);
    }

    useEffect(() => {
        getData(imageSearch);
    });

    return {
        images,
        isLoading
    }
}
