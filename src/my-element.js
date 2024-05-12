import { LitElement, css, html} from "lit";

export class MyElement extends LitElement{ 
    static properties = {
      name_song: {type: String}
    };
  
    constructor() {
      super();
      this.imagen = "/src/assets/image22.jpg"
      this.name_song = `Magazine`
      this.name_artist = "$uicideBoys"
      this.time = "3:14"
      this.date_exit = 2016
    }
  
    render() {
      return html`
        <div class="card">
            <div class="cards">
            <div class="cards_info">
              <div class="aling">
                    <button  type="button"> <box-icon name='menu'></box-icon></button>
              </div>
              <div class="img"><img src="${this.imagen}"></div>
              <div class="Titule_and_artis">
                    <h3>${this.name_song}</h3>
                    <h5>${this.name_artist}</h5>
              </div>
            </div>           
              <div class="minutes_and_date">
                    <h4>${this.time}</h4>
                    <h5>${this.date_exit}</h5>
              </div>
            </div>
            
        </div>
      `;
    }

    static styles = css`
    .card {
      width: 300px;
      margin: 10px;
      padding: 0;
  }

  .img img {
      border-radius: 50px;
      width: 50px;
      height: 50px; 
  }

  .cards{
      background: white;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden; 
      margin-bottom: 10px
  }

  .cards h3{
    margin: 0;
  }

  .cards h5{
    margin: 0;
    color: rgb(124, 124, 124);
  }

  .cards h4{
    margin: 0;
  }

  .cards button{
    background: none;
    border: none;
  }

  .card button:hover{
    cursor: pointer;
  }

  .cards .cards_info{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .cards .cards_info .img{
    height: 50px;
    width: 50px
  }

  .cards .cards_info .img img{
    height: 50px;
    width: 50px;
    object-fit: cover;
  }
    `
    _guardar(e){
        let cancion = this.name(e.target.value)
        return(cancion)
    }
}   
customElements.define('my-element', MyElement);