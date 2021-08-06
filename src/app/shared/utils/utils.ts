/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export namespace Utils {
    export function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
