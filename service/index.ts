
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
});

export default api;


export async function fetchData<T>(url: string): Promise<T> {
    try {
        const response = await api.get<T>(url)
        return response.data;
    } catch (error) {
        throw error;
    }
}
