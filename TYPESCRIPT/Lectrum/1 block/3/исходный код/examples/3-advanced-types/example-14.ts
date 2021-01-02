{
    type ErrorCodes = 404 | 503;

    const showMessage = function (code: ErrorCodes): void {
        if (code === 404) {
            console.log('Client Error');
        } else if (code === 503) {
            console.log('Server Error');
        }
    };

    showMessage(404);
    showMessage(503);
    // showMessage(200);
}