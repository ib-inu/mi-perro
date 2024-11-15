import { useEffect, useRef, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Image from 'next/image';

type BasicCardProps = {
    dog: string
}

export default function BasicCard({ dog }: BasicCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    const breedName = dog.split('/')[4];
    const dogName = breedName.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '10px',
            }
        );

        const currentImageRef = imageRef.current;

        if (currentImageRef) {
            observer.observe(currentImageRef);
        }

        return () => {
            if (currentImageRef) {
                observer.unobserve(currentImageRef);
            }
        };
    }, []);

    function getRandomPrice(min = 500, max = 5000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const price = getRandomPrice();




    return (
        <Card className="max-w-3xl mx-8 sm:mx-0">
            <div>
                <Typography level="title-lg">{dogName}</Typography>

                <IconButton
                    aria-label="bookmark dog breed"
                    variant="soft"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                    <BookmarkAdd />
                </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <div ref={imageRef} style={{ minHeight: '100%', width: '100%' }}>
                    {isVisible && (
                        <Image
                            width={100}
                            height={100}
                            src={dog}
                            sizes='80'
                            loading='lazy'
                            // srcSet={`${dog}&dpr=2 2x`}
                            alt={dogName}
                            style={{ objectFit: 'cover' }}
                        />
                    )}
                </div>
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>

                    <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>${price}</Typography>
                </div>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore dog breed"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Explore
                </Button>
            </CardContent>
        </Card>
    );
}
