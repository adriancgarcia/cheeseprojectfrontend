import url from "./url"
import {redirect} from "react-router-dom"

export const createAction = async ({request}) => {
    const formData = await request.formData();
    

    const newCheese = {
        typeofcheese: formData.get("typeofcheese"),
        countryoforigin: formData.get("countryoforigin"),
        color: formData.get("color")
    }

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newCheese)
        })

        return redirect("/")
}

export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedCheese = {
        typeofcheese: formData.get("typeofcheese"),
        countryoforigin: formData.get("countryoforigin"),
        color: formData.get("color")
    }
    
    await fetch(url + id, {
        method: "put", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect (`/post/${id}`)
}

export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })

    return redirect ("/")
}





