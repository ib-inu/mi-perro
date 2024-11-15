"use client"

import { Box, CircularProgress } from "@mui/joy"
import Card from "@/app/_components/Card"
import CardSkelton from "@/app/_components/CardSkelton"
import { useDogs } from "@/app/_context/DogsContext"
import { fetchRandomDog } from "@/app/api/randomDogs"
import { useEffect, useState } from "react";


function DogList() {
    const { dogsImage, isLoading } = useDogs();
    const [randomDog, setRandomDog] = useState<string[]>([]);
    const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
    const [randomDogError, setRandomDogError] = useState<Error | null>(null);
    const image = dogsImage.length > 0 ? dogsImage : randomDog;


    useEffect(() => {
        async function fetchRandomDogImages() {
            setIsRandomLoading(true)
            try {
                const res = await fetchRandomDog();

                setRandomDog(res);
            } catch (e) {
                if (e instanceof Error) {
                    setRandomDogError(e);
                } else {
                    setRandomDogError(new Error("Unknown error occurred"));
                }
            } finally {
                setIsRandomLoading(false)
            }
        }
        fetchRandomDogImages()
    }, [])







    return (
        <div className="my-10">
            <div className="mb-10  grid gap-7 sm:grid-cols-2 md:grid-cols-3 sm:mx-5">

                {(isLoading || isRandomLoading) ? Array.from({ length: 6 }, (_, index) => (
                    <CardSkelton key={index} />
                ))
                    : image?.map((dog, i) => (
                        <Card key={i} dog={dog} />
                    ))}
            </div>
            {randomDogError &&
                <div className="items-center justify-center flex ">
                    <p className="text-slate-500">something went wrong, try again</p>
                </div>

            }

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
