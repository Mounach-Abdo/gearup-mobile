import React, { Component } from 'react'

export class PcGamerComponentsList extends Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
            };
       
         this.showDropdownMenu = this.showDropdownMenu.bind(this);
       
       };
       
       showDropdownMenu(event) {
           event.preventDefault();
           this.setState({ displayMenu: !this.state.displayMenu }, () => {
           });
         }
       
         render() {
           return (
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub" >
                  <a className="active " onClick={this.showDropdownMenu} href="#COMPOSANTS PC GAMER">COMPOSANTS PC GAMER</a>
                <span className="arrow" onClick={this.showDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub">
                             <a className="active " href="#PROCESSEUR (CPU)">PROCESSEUR (CPU)</a>
                        </li>
                        <li><a href="#CARTE GRAPHIQUE/VIDÉO (GPU)">CARTE GRAPHIQUE/VIDÉO (GPU)</a></li>
                        <li><a href="#CARTE MÈRE">CARTE MÈRE</a></li>
                        <li><a href="#MÉMOIRE VIVE (RAM)">MÉMOIRE VIVE (RAM)</a></li>
                        <li><a href="#DISQUE DE STOCKAGE">DISQUE DE STOCKAGE</a></li>
                        <li><a href="#ALIMENTATION PC">ALIMENTATION PC</a></li>
                        <li><a href="#BOÎTIER PC">BOÎTIER PC</a></li>
                        <li><a href="#REFROIDISSEMENT PC">REFROIDISSEMENT PC</a></li>
                     </ul>
               ):
               (
                 null
               )
               }
            </li>
           
       
           );
         }
}

export default PcGamerComponentsList


