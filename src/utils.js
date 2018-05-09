/**
 * Generates a UUID
 * based on: https://stackoverflow.com/a/2117523
 * @returns {string} uuid
 */

export function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

/**
 * Checks if a data is ArrayBuffer
 * @returns {boolean}
 */
export function isArrayBuffer(data) {
    return data instanceof ArrayBuffer;
}

/**
 * get current moment in ISO format
 * @returns {string} date
 */
export function getCurrentDate() {
    return (new Date).toISOString();
}
