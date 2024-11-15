import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export default function CardSkelton() {
    return (
        <Card variant="outlined" className="max-w-3xl mx-10 sm:mx-0 ">
            <AspectRatio ratio="21/9">
                <Skeleton variant="overlay">
                    <img
                        alt=""
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    />
                </Skeleton>
            </AspectRatio>
            <Typography>
                <Skeleton>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries.
                </Skeleton>
            </Typography>
        </Card>
    );
}