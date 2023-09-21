import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props) {
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    return (
        <div style={div}>
            <h1>{post.typeofcheese}</h1>
            <h2>{post.countryoforigin}</h2>
            <h2>{post.color}</h2>
            <div style={{ textAlign: "center" }}>
                <h2>Update Cheese</h2>
                <Form method="post" action= {`/update/${post.id}`}>
                    <input type="text" name="typeofcheese" defaultValue={post.typeofcheese}/>
                    <input type="text" name="countryoforigin" defaultValue={post.countryoforigin}/>
                    <input type="text" name="color" defaultValue={post.color}/>
                    <button>Update Cheese</button>
                </Form>
            </div>
        <Link to="/">Back to Index</Link>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Cheese</button>
        </Form>
    </div>
    );
}

export default Show;