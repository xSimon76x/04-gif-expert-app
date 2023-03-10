
import { useFetchGift } from "../hooks/useFetchGift";
import { GifItem } from "./GifItem";

export const GifGrid = ({inputValue}) => {
  
    const { images, isLoading } = useFetchGift(inputValue);

    console.log(inputValue)

    return (
        <>
            <div className="card-grid">
                {
                    !isLoading ? Object.values(images).map( (image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                    :
                    <p>cargando...</p>
                }
            </div>
            
        </>
    )
}
