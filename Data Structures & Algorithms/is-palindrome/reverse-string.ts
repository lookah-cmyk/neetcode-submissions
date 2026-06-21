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
        let first = "";
        let reversed = "";

        for (let index = 0; index < s.length; index++) {
            const element = s[index];
            if (isAlphaNumeric(element)) {
                first += element.toLowerCase();
            }
        }

        for (let index = s.length - 1; index >= 0; index--) {
            const element = s[index];
            if (isAlphaNumeric(element)) {
                reversed += element.toLowerCase();
            }
        }

        return first === reversed;
    }
}
