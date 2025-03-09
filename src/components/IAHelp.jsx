// import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AiTip from '../AI/AiTip';
// import PromisseTimer from './PromisseTimer';

export default class IAHelp extends Component {
  constructor() {
    super();
    this.state = {
      tipIA: '',
      loading: false,
    };
    this.handleClickIA = this.handleClickIA.bind(this);
  }

  async handleClickIA() {
    const { resposta } = this.props;

    this.setState({ loading: true });
    try {
      const tip = await AiTip.colectTip(resposta);
      console.log(tip);

      this.setState({ tipIA: tip, loading: false }); // Define tipIA e remove o carregamento
    } catch (error) {
      console.error('Erro ao coletar dica da IA:', error);
      this.setState({ tipIA: 'Erro ao obter dica.', loading: false }); // Lida com erros e remove o carregamento
    }
  }

  render() {
    const { tipIA, loading } = this.state;

    return (
      <div
        style={ {
          display: 'flex',
          justifyContent: 'left',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          padding: '5px',
          margin: '10px',
          fontSize: '0.8em',
        } }
      >
        <button
          type="button"
          className="button is-warning is-dark is-small is-outlined"
          onClick={ this.handleClickIA }
        >
          dica da IA
        </button>
        {' '}
        {loading ? (
          <div>
            <p>Carregando...</p>
            {/* <PromisseTimer
              setTime={ 0 }
            /> */}
          </div>
        ) : (
          <textarea
            type="text"
            value={ tipIA }
            readOnly
            className="input is-info is-small is-rounded"
          />
        )}
      </div>
    );
  }
}

IAHelp.propTypes = {
  resposta: PropTypes.string.isRequired,
};
