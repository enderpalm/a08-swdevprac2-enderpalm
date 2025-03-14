export default async function getVenue(id: string): Promise<VenueJson> {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            const response = await fetch(`https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${id}`);
            if (!response.ok) {
                reject(new Error(`Failed to fetch venue with id: ${id}`));
            }
            resolve(await response.json());
        }, 300);
    });
}