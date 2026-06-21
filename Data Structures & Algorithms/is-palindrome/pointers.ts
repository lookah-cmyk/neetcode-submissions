function isAlphaNumeric(str: string) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (
            !(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)
        ) {
            // lower alpha (a-z)
            return false;
        }
    }
    return true;
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let leftPointer = 0;
        let rightPointer = s.length - 1;

        while (leftPointer < rightPointer) {
            const leftChar = s[leftPointer];
            const rightChar = s[rightPointer];

            if (!isAlphaNumeric(leftChar)) {
                leftPointer += 1;
                continue;
            }

            if (!isAlphaNumeric(rightChar)) {
                rightPointer -= 1;
                continue;
            }

            if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            }

            leftPointer += 1;
            rightPointer -= 1;
        }

        return true;
    }
}
