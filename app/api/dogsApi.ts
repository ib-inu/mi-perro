export const fetchDogData = async (query: string) => {
    if (query === "") return [];
    const breed = query.toLowerCase().split(' ').join('');
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/90`);


        if (!response.ok) {
            throw new Error(`no search found!`);
        }

        const { message: data, status } = await response.json();

        if (status !== "success") {
            throw new Error("API returned a failure status");
        }

        return data;

    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error("Failed to fetch dog data: An unknown error occurred");
        }
    }
};