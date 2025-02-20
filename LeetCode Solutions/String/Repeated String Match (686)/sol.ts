function rabinKarp(source: string, target: string): boolean {
    if (source === "" || target === "") return false

    let m: number = target.length
    let base: number = 1000000
    let power: number = 1

    // Calculate 31^m mod BASE
    for (let i = 0; i < m; i++) {
        power = (power * 31) % base;
        console.log("this power",power)
    }

    // Calculate hash code for target string
    let targetCode: number = 0;
    for (let i = 0; i < m; i++) {
        targetCode = (targetCode * 31 + target.charCodeAt(i)) % base;
    }

    // Sliding window to find the target string
    let hashCode: number = 0;

    for (let i = 0; i < source.length; i++) {
        hashCode = (hashCode * 31 + source.charCodeAt(i)) % base

        // Skip until we have at least m characters
        if (i < m - 1) continue;

        // Remove the leftmost character from the hash
        if (i >= m) {
            hashCode = (hashCode - source.charCodeAt(i - m) * power) % base;
        }

        // Ensure the hash is positive
        if (hashCode < 0) hashCode += base;

        // If hash matches, verify the substring
        if (hashCode === targetCode) {
            if (source.substring(i - m + 1, i + 1) === target) {
                return true
            }
        }
    }

    return false
}

function repeatedStringMatch(a: string, b: string): number {
    // base case
    if (a === b) return 1

    let count: number = 1
    let source: string = a

    while (source.length < b.length) {
        count++
        source += a
    }

    if (source === b) return count

    // using rabin-karp for string matching
    if (rabinKarp(source, b)) return count
    if (rabinKarp(source + a, b)) return count + 1;

    return -1
};