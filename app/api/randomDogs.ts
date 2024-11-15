const fetchRandomDog = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/12`);

    if (!response.ok) {
        throw new Error(`No Dog Found!`);
    }

    const { message, status } = await response.json();

    if (status !== "success") {
        throw new Error("API returned a failure status");
    }

    return message;
};

export { fetchRandomDog }

