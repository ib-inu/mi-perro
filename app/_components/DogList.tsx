import { Box, CircularProgress } from "@mui/joy"
import Card from "../../Components/Card"
import CardSkelton from "../../Components/CardSkelton"
import { useDogs } from "../../context/DogsContext"
import { useQuery } from "react-query";
import { fetchRandomDog } from "../../api/randomDogs";


function DogList() {
    const { dogImages, isLoading, error } = useDogs();

    const { data: randomDog, isLoading: isRandomLoading, error: randomImgError } = useQuery({
        queryKey: ["randomImg"],
        queryFn: fetchRandomDog
    })

    const image = dogImages ? dogImages : randomDog;
    console.log(image);









    return (
        <div className="my-10">
            <div className="mb-10  grid gap-7 sm:grid-cols-2 md:grid-cols-3 sm:mx-5">

                {isLoading || isRandomLoading ? Array.from({ length: 6 }, (_, index) => (
                    <CardSkelton key={index} />
                ))
                    : image?.map((dog, i) => (
                        <Card key={i} dog={dog} />
                    ))}
            </div>
            {isLoading || isRandomLoading && <>

                <Box sx={{
                    display: 'flex',
                    justifyContent:
                        'center',
                    alignItems: 'center',
                    width: '100%',
                }}>

                    <CircularProgress sx={{
                        margin: "0 auto"
                    }} variant="solid" color="neutral" />
                </Box>
            </>
            }
        </div >

    )
}

export default DogList
