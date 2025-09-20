import { ArrayBufferConverter } from './ar_buf';

let data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
let buffer = new ArrayBufferConverter(data);
console.log('-->', buffer.load());
console.log('-->>', buffer.toString());
