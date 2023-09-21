import Post from '../components/Post';
import {useLoaderData} from 'react-router-dom';

function Index (props){

    const cheeses = useLoaderData()

    return cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)
}

export default Index;