// XMLHTTPREQUEST
function getXMLHttpRequest() {
    return new Promise((resolve, reject) => {
        const myRequest = new XMLHttpRequest();

        myRequest.open("GET", "https://cat-fact.herokuapp.com/facts/");
        myRequest.responseType = 'json';

        myRequest.onload = () => {
            if (myRequest.status === 200) {
                resolve(myRequest.response);
            } else {
                reject(`HTTP error: ${myRequest.status}`);
            }
        }

        myRequest.send();
    });
}

// FETCH
async function getFetch() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts/');

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    return response.json();
}

// Função para imprimir frases do texto

function textCat(data) {
    data.forEach(fact => console.log(fact.text));
}

getXMLHttpRequest()
    .then(data => textCat(data))
    .catch(error => console.error('Error:', error));

getFetch()
    .then(data => textCat(data))
    .catch(error => console.error('Error:', error));