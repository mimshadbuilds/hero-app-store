export const getAllApps = async () => {
    try {
        const res = await fetch('http://localhost:5000/data');
        if (!res.ok) {
            throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Failed to fetch apps:', error);
        throw error;
    }
}