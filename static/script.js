alert("Hello World!");
window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('myCoolButton').addEventListener('click', () => {
        const userText = document.getElementById('topic').value;
        // Everything you want to do when button is clicked below
        console.log('Button was clicked :O'); // console.log is like printing in JS!
        alert(userText);
        const url = '/search/' + userText; // This should remind you of APIs in Python!
        window.fetch(url)
            .then(response => response.json()) // So should JSON conversion!
            .then(data => { // .then will only run the function *once* the data is fetched from the internet
                console.log(data); // See what this logs!
                var newDiv = document.createElement('div');
                var i;
                var node;
                for (i=0; i<data['headlines'].length; i++) {
                    node = document.createTextNode(data['headlines'][i]);
                    newDiv.appendChild(node);
                }
                var element = document.getElementById('container');
                element.appendChild(newDiv);
            });
    });
};

