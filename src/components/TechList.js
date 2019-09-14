import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {

    /**
     * Definir valores defaults para propriedades
     */
    static defaultProps = {

    };

    /**
     * Todo state do react é imutavel, assim não sendo possível uma alteração direta.
     */

    state = {
        newTech: '',
        techs: []
    }

    /**
     * Ciclo de Vida dos Componentes
     */

    //Executado assim que o componente aparece em tela
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if (techs) {
            this.setState({ techs: JSON.parse(techs) })
        }
    }

    // Executado sempre que houver alteracao nas props ou estado
    //  componentDidUpdate(prevProps, prevState) {
    componentDidUpdate(_, prevState) {
        // this.props, this.state
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }

    }

    // Executado quando o componente deixa de existir
    componentWillMount() {

    }

    /**
     * Usar arrow function para a funcao ter acesso a variavel this da classe 
     */

    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        /**
         * Faz com que o evento defaul da funcao não seja executado
         */
        e.preventDefault();

        /**
         * para inserir um novo dado em um array ou objeto, 
         * tem que recriar todo o array/objeto com o novo dado que deseja inserir ou remover
         */
        this.setState({ techs: [... this.state.techs, this.state.newTech], newTech: '' })
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech =>
                        <TechItem
                            key={tech}
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)}
                        />
                    )}
                </ul>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;