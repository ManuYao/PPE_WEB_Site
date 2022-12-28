import React, { Component } from 'react'
import ListProjet from './ListProjet'
export class ProjetGlobal extends Component {
    state = {
        titlePage: 'PPE 2023',
        subTitle: 'Sous de titre page web [?]'
    }
  render() {
    return (
      <div> 
        <h1>{this.state.titlePage}</h1>
        <h3>{this.state.subTitle}</h3>
        <button>Téléchargement ...</button>

        <div className='list-projet'>
            <h2>Section PPE</h2>
            <ListProjet subTitle='Projet de serveur Active Directory'>Serveur AD Windows</ListProjet>
            <ListProjet subTitle='Projet, serveur Web APACHE'>Serveur WEB</ListProjet>
        </div>
      </div>
    )
  }
}

export default ProjetGlobal