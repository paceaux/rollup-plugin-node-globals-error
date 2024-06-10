// global

function getLocationAsync(tryLimit = 4, waitTime = 300) {
    return new Promise((resolve, reject) => {
        let tryCount = 0;
        const getLocation = () => {
            if (tryCount >= tryLimit) {
                reject('Failed to get location');
                return;
            }
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve, () => {
                    tryCount++;
                    setTimeout(getLocation, waitTime);
                });
            } else {
                reject('Geolocation is not supported');
            }
        };
        getLocation();
    });
}
window.addEventListener('load', async () => {
    try {
        const accuracy = await getLocationAsync()?.coords?.accuracy;
        console.log(`Location accuracy: ${accuracy}`);
    } catch (error) {
        console.error(error);
    }
});