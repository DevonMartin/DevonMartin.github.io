class Head extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
                    <meta charset="UTF-8" content="initial-scale=1, width=device-width" name="viewport">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link href="styles.css" rel="stylesheet">
                    <link rel="icon" href="pics/logo.png">
        `;
    }
}

customElements.define('head-component', Head);