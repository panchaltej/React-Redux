const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doCalculation = (payload) =>
    fetch(`${api}/calculate/doCalculation`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        return res.json();
    })
    // .then(data => { 
    //     //alert( JSON.stringify( data ) ); 
    //     return JSON.stringify(data);
    // })
    .catch(error => {
            console.log("This is error");
            return error;
    });