import { str2uint } from './helper.js'

const subtle = window.crypto.subtle

var __stamp__ = 0
var __inc__ = 0 //用于生成保证唯一的uuid种子

export function uuid() {
  var rand = Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2)
  var now = (~~(Date.now() / 1000)).toString(16)

  if (__stamp__ === now) {
    __inc__++
  } else {
    __stamp__ = now
    __inc__ = 0
  }
  rand = __stamp__ + __inc__.toString(16) + rand
  return rand.slice(0, 24)
}

/**
 * ArrayBuffer 转 hex
 */
export function ab2hex(buf) {
  var uint8 = new Uint8Array(buf)
  return [...uint8].map(n => n.toString(16).padStart(2, '0')).join('')
}

/**
 * ArrayBuffer 转 Binary
 */
export function ab2bin(buf) {
  var bin = ''
  var uint8 = new Uint8Array(buf)
  for (var i = 0; i < uint8.length; i++) {
    bin += String.fromCharCode(uint8[i])
  }
  return bin
}

/* ------------------------------------- */

/**
 * @return Promise
 */
export function hash(type, str) {
  if (typeof str === 'string') {
    str = str2uint(str)
  }
  return subtle.digest(type, str).then(buf => ab2hex(buf))
}

export function sha1(str) {
  return hash('SHA-1', str)
}

export function sha256(str) {
  return hash('SHA-256', str)
}

export function sha512(str) {
  return hash('SHA-512', str)
}

export function hmac(mode, str, key = '', encode) {
  if (key) {
    if (typeof key === 'string') {
      key = str2uint(key)
    }
  } else {
    key = new Uint8Array(16)
  }
  return subtle
    .importKey('raw', key, { name: 'HMAC', hash: { name: mode } }, true, ['sign', 'verify'])
    .then(cKey => {
      return subtle.sign('HMAC', cKey, str2uint(str)).then(ab => {
        var output = ab

        switch (encode) {
          case 'binary':
            output = ab2bin(ab)
            break
          case 'hex':
            output = ab2hex(ab)
            break
          case 'base64':
            output = window.btoa(ab2bin(ab))
            break
          case 'buffer':
            output = new Uint8Array(ab)
            break
        }

        return output
      })
    })
}
