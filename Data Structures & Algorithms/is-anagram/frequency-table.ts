class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sfreq: { [i: string]: number } = {};

        for (const item of s) {
            sfreq[item] = (sfreq[item] ?? 0) + 1;
        }

        const tfreq: { [i: string]: number } = {};

        for (const item of t) {
            tfreq[item] = (tfreq[item] ?? 0) + 1;
        }

        if (Object.keys(sfreq).length !== Object.keys(tfreq).length) return false;

        for (const item of Object.keys(sfreq)) {
            if (tfreq[item] !== sfreq[item]) {
                return false;
            }
        }

        return true;
    }

    // Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

    // An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
}
