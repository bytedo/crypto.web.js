const encoder = new TextEncoder()
const decoder = new TextDecoder()

/**
 * String 转 Uint8Array
 */
export function str2uint(txt) {
  return encoder.encode(txt)
}

export function buf2str(buf) {
  return decoder.decode(buf)
}
