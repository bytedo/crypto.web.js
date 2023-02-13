## crypto.js浏览器版本,提供常用的加密封装


感谢以下2个优秀的开源库:

1. [spark-md5](https://github.com/satazor/js-spark-md5), 这个经本人测试, 确实是纯js版, 性能最高的一个, 本仓库引入进来, 调整为ESM方式使用。
2. [base64](https://github.com/beatgammit/base64-js), 完整的base64库, 相比原生的 btoa()方法, 这个支持对中文进行编码。


以上这2个库, 在index.js中有引入。对体积有要求的, 可以单独使用。


```js
import crypto, { md5, base64encode } from '//unpkg.com/crypto.web.js/dist/index.js'
import crypto, { md5, base64encode } from '//jscdn.ink/crypto.web.js/1.0.0/index.js'  // 大陆用户可使用此加速地址

import { md5, md5Sum } from '//jscdn.ink/crypto.web.js/1.0.0/md5.js'

import { base64encode, base64decode } from '//jscdn.ink/crypto.web.js/1.0.0/base64.js'


```

### APIs

#### 1. md5(str`<String>`) 
> 常规的md5函数, 可对字符串(数字类型也可以), 进行加密。


#### 2. md5Sum(ab`<ArrayBuffer>`) 
> 该方法可用于对文件求md5值, 需传入`ArrayBuffer`对象, 可用 `FileReader`得到`arraybuffer`值, 新浏览器的`Blob`对象,也有个`arraybuffer`原型方法。


#### 3. base64encode(str`<String>`) 
> base64编码, 支持中文。


#### 4. base64decode(str`<String>`) 
> base64解码。


#### 5. uuid() 
> 生成一个唯一的24位的随机字符串。 只保证单机唯一。


#### 6. ab2hex(ab`<ArrayBuffer>`) 
> 将一个`arraybuffer`对象, 转为 十六进制字符串。


#### 7. ab2bin(ab`<ArrayBuffer>`) 
> 将一个`arraybuffer`对象, 转为 `Binary` 符串。


#### 8. sha1(str`<String>`) 
> 对指定字符串求 `sha1`值。
>> 注意: 该方法返回的不是字符串, 而是一个Promise对象。


#### 9. sha256(str`<String>`) 
> 对指定字符串求 `sha256`值。
>> 注意: 该方法返回的不是字符串, 而是一个Promise对象。


#### 10. sha512(str`<String>`) 
> 对指定字符串求 `sha512`值。
>> 注意: 该方法返回的不是字符串, 而是一个Promise对象。


#### 11. hash(algorithm`<String>`, data`<String>|<ArrayBuffer>`) 
> 散列算法(也称为哈希算法)，用来实现一些重要数据的模糊处理，以达到隐藏明文的目的。 上面的sha1、sha256等，其实就是基于这个再次封装的结果; algorithm，可选值有: SHA-1, SHA-256, SHA-384, SHA-512。
>> 注意: 该方法返回的不是字符串, 而是一个Promise对象。


#### 12. hmac(algorithm`<String>`, data`<String>|<ArrayBuffer>`, key`<String>`, outEncode`<String>`) 
> HMAC算法，是在散列算法的基础上，与一个密钥结合在一起，以阻止对签名完整性的破坏。 与上面的散列算法相比，多了一个密钥的参数key。
>> 注意: 该方法返回的不是字符串, 而是一个Promise对象。