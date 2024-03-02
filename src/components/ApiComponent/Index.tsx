import axios from 'axios'
import { useQuery } from 'react-query'

export default function ApiComponent() {
    const { data, isLoading, error } = useQuery('jokes', () => {
        return axios.get('https://api.chucknorris.io/jokes/random').then(r => r.data)
    }, {
        retry: 5,
        refetchOnWindowFocus: false,
        refetchInterval: 5000
    })

    if (isLoading) {
        return <p className='text-secondary opacity-60 text-xs text-left mt-4'>Loading...</p>
    }
    if (error) {
        return <p className='text-deleteButton mt-2'>Algo deu errado :/</p>
    }
    const joke = data.value;
    return (
        <div className='text-secondary opacity-60 text-xs text-left mt-4 '>
            <p className=' font-light italic'>{joke}</p>
            <p className='font-semibold'>By Chuck Norris</p>
        </div>
    )
}