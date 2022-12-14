import Mustache from "mustache";

export function getElementById(idName:string) {
    return document.getElementById(idName);
}

export function getQuerySelector(selector:string) {
    return document.querySelector(selector);
}

export function fetchJson(api:string,id:string, template:string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/json");        

    const requestOptions:RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };    

    fetch(api, requestOptions)
        .then(response => response.json())
        .then(result => {                
                        
            const list = {items:result.data};
            console.log(list);                
            const output = Mustache.render(template,list);
            getElementById(id).innerHTML = output;
        })
        .catch(error => console.log('error', error));

}