import axios from "axios";
import md5 from "md5";

const publicKey = "9239adc909d8cc809c3c2a84135a16ce";
const privateKey = "c4ad32ae12b03fc7fb413f8124b050ff398a7ba7";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

// export const getData = axios
//   .get(
//     `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
//   )
//   .then((res) => res)
//   .catch((err) => console.log(err));

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`,
});
export default api;
