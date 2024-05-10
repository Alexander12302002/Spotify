import { LitElement, css, html} from "lit";

export class MyElement extends LitElement{ 
    static styles = css`p { color: blue }`;

    static properties = {
    };
  
    constructor() {
      super();
      this.imagen = "/src/assets/image22.svg"
    }
  
    render() {
      return html`
        <div class="card">
            <div class="cards">           
            <div class="aling"></div>
            <div class="img"><img src="${this.imagen}"></div>
            <div class="Titule_and_artis"></div>
            <div class="minutes_and_date"></div>
            </div>
        </div>
      `;
    }

    static styles = css`
        .cards{
            background: black;
            wi
        }
    `

    _guardar(e){
        let cancion = this.name(e.target.value)
        return(cancion)
    }
}   
customElements.define('my-element', MyElement);