function isIPAddress(ip) {
    return /^(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])){3}$/.test(ip);
}

function findRGBA(text) {
    let match = text.match(/rgba\(\s*(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])\s*,\s*(0|1|0?\.\d+)\s*\)/);
    return match ? match[0] : null;
}

function findHexColor(text) {
    let match = text.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})\b/);
    return match ? match[0] : null;
}

function findTags(text, tag) {
    let regex = new RegExp(`<${tag}[^>]*>`, 'gi');
    return text.match(regex) || [];
}

function findPosNum(text) {
    return text.match(/\b\d+(\.\d+)?\b/g)?.map(Number) || [];
}

function findDates(text) {
    return text.match(/\b\d{4}-\d{2}-\d{2}\b/g) || [];
}

function findEmail(text) {
    return text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g) || [];
}

console.log(isIPAddress("192.168.1.1"));
console.log(isIPAddress("999.999.999.999"));
console.log(findRGBA("background: rgba(255, 100, 50, 0.5);"));
console.log(findHexColor("Color is #1a2b3c and #fff."));
console.log(findTags("<div>Hello</div><p>Test</p>", "p"));
console.log(findPosNum("Values: 3.14, 42, and -5."));
console.log(findDates("2023-05-15 is a date, but 15-05-2023 is not."));
console.log(findEmail("Contact me at example@mail.com or test@domain.org."));
