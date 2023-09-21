import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    const cheeses = useLoaderData()

    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a Cheese</h2>
        <Form method="post" action="/create">
            <input type="text" name="typeofcheese" placeholder="Type Of Cheese"/>
            <input type="text" name="countryoforigin" placeholder="Country Of Origin"/>
            <input type="text" name="color" placeholder="Color"/>
            <button>Create a new Cheese</button>
        </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>

}

export default Index;