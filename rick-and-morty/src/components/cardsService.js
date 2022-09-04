import axios from "axios"

export default class PostService {
    static async getAll(value){
        let response = await axios.get('https://rickandmortyapi.com/api/character', { params: { page: value } } )

        console.log('сторінка');
        return response
    }
}


// { params: { page: num } }