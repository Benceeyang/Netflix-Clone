import axios from 'axios';

const instance = axios.create({
    //passes a base url 
    baseURL : `https://api.themoviedb.org/3`
});

//instance.get('foo-bar')

export default instance;