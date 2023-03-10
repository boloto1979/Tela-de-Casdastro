import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina1(props) {
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "auto",
    marginTop: "50px",
  };

  const blackButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#000000",
    color: "#FFFFFF",
  };

  const imgStyle = {
    margin: '20px',
    justifyContent: 'center',
  };

  return (
    <div>
      <a href="/">
        <img style={imgStyle} src="" />
      </a>
      <Link to={Pagina5} style={blackButtonStyle}>
        <button style={blackButtonStyle}>Criar cadastro</button>
      </Link>
      <Link to={Pagina44} style={buttonStyle}>
        <button style={buttonStyle}>Já tenho cadastro</button>
      </Link>
    </div>
  );

}
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { constant } from 'lodash';
import { event } from 'jquery';
  
  function Pagina5(props) {
    const [name, setName] = useState('');
    const textContainer = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    };
  
    const arrowStyle = {
      position: 'absolute',
      top: '20px',
      left: '20px',
      fontSize: '24px',
    };

    const buttonStyle = {
      backgroundColor: '#4395ff',
      color: 'white',
      borderRadius: '20px',
      padding: '10px',
      margin: '20px 0',
      width: '120px',
      textAlign: 'center',
    };
  
    return (
      <div>
        <Link to={Pagina1}>
          <FontAwesomeIcon icon={faArrowUp} style={arrowStyle} />
        </Link>
        <div style={textContainer}>
          <p style={{ textAlign: 'center' }}><strong>
            Como vai? Vamos iniciar o seu cadastro. Para isso, siga o passo a passo a seguir:
          </strong></p>
        </div>
        <div style={textContainer}>
          Digite seu nome
        </div>
        <div>
          <input type="text" style={{ borderRadius: '10px' }} placeholder="Nome completo" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        {name && (
          <Link to={Pagina4}>
            <button style={buttonStyle}>Continue</button>
        </Link>)}
    </div> 
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina44(props) {
    const [name, setName] = useState('');
  const pageStyle = {
    backgroundColor: '#000000',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const inputStyle = {
    borderRadius: '20px',
    border: 'none',
    padding: '10px',
    margin: '10px',
    color: '#FFFFFF',
    backgroundColor: '#333333',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
    position:'fixed',
    bottom: '0',
  };

  return (
    <div>
        <div style={pageStyle}>
            <input type="text" style={{ borderRadius: '10px' }} placeholder="E-mail ou CPF" value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="password" style={{ borderRadius: '10px' }} placeholder="Senha" value={name} onChange={(even) => setName(event.target.value)}/>
        </div>
        {name && (
            <Link to={Pagina6}>
                <button style={buttonStyle}>Entrar</button>
            </Link>)}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina4(props) {
  const { name } = props;

  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: 'auto',
    color: '#767873',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '0 10px',
    width: '100px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina5}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={{ fontWeight: 'bold', textAlign: 'center' }}>
        Olá! {name}.
      </div>
      <div style={textContainerStyle}>
        Digite seu número de celular
      </div>
      <div style={inputContainerStyle}>
        <input type="text" style={inputStyle} placeholder="DDD" />
        <input type="text" style={inputStyle} placeholder="Número" />
      </div>
      <Link to= {Pagina2}>
        <button style={buttonStyle}>Continue</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina2() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
  };


  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '0 10px',
    width: '100px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };


  return (
    <div style={containerStyle}>
      <Link to={Pagina4}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Atenção: Informe um e-mail que você tenha fácil acesso, pois será através dele que posteriormente você irá agendar sua inspeção.
      </div>
      <div>
        <input type="text" style={inputStyle} placeholder="Email"></input>
      </div>
      <Link to={Pagina13}>
      <button style={buttonStyle}>Continue</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina13() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '0 10px',
    width: '200px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to="/pagina2">
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Digite seu CPF
      </div>
      <div>
        <input type="text" style={inputStyle} placeholder="CPF"></input>
      </div>
      <Link to={pagina12}>
      <button style={buttonStyle}>Continue</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function pagina12() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '0 10px',
    width: '200px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina13}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Data de Nascimento
      </div>
      <div>
        <input type="text" style={inputStyle} placeholder="Data de Nascimento"></input>
      </div>
      <Link to={Pagina11}>
      <button style={buttonStyle}>Continue</button>
      </Link>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina11() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
  };

  const headingStyle = {
    fontWeight: 'bold',
    margin: '20px 0',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };

  const buttonStyleConti = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  const [selectedZone, setSelectedZone] = useState('');

  const handleZoneSelection = (zone) => {
    setSelectedZone(zone);
  };

  return (
    <div style={containerStyle}>
      <Link to={pagina12}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={headingStyle}>Escolha sua Zona</div>
      <div style={buttonContainerStyle}>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: selectedZone === 'Oeste' ? 'blue' : 'white',
            color: selectedZone === 'Oeste' ? 'white' : 'black',
          }}
          onClick={() => handleZoneSelection('Oeste')}
        >
          Oeste
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: selectedZone === 'Norte' ? 'blue' : 'white',
            color: selectedZone === 'Norte' ? 'white' : 'black',
          }}
          onClick={() => handleZoneSelection('Norte')}
        >
          Norte
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: selectedZone === 'Leste' ? 'blue' : 'white',
            color: selectedZone === 'Leste' ? 'white' : 'black',
          }}
          onClick={() => handleZoneSelection('Leste')}
        >
          Leste
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: selectedZone === 'Sul' ? 'blue' : 'white',
            color: selectedZone === 'Sul' ? 'white' : 'black',
          }}
          onClick={() => handleZoneSelection('Sul')}
        >
          Sul
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: selectedZone === 'Centro' ? 'blue' : 'white',
            color: selectedZone === 'Centro' ? 'white' : 'black',
          }}
          onClick={() => handleZoneSelection('Centro')}
        >
          Centro
        </button>
      </div>
      <Link to={Pagina10}>
      <button style={buttonStyleConti}>Continue</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina10() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '0 10px',
    width: '200px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina11}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Crie sua Senha
      </div>
      <div>
        <input type="password" style={inputStyle} placeholder="Crie sua senha"></input>
      </div>
      <Link to={Pagina9}>
      <button style={buttonStyle}>Continue</button>
      </Link>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina9() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '0 10px',
    width: '200px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina10}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Confirme sua senha
      </div>
      <div>
        <input type="password" style={inputStyle} placeholder="Confirme sua senha"></input>
      </div>
      <Link to={Pagina1}><button style={buttonStyle} onClick={handleSubmit}>Continue</button></Link>
      {isSubmitted && <div style={{ color: 'green' }}>Cadastro concluído com sucesso.</div>}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina6() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina1}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Escolha uma das opções abaixo para prosseguir:
      </div>
      <div style={buttonContainerStyle}>
        <Link to={Pagina24}>
          <button style={buttonStyle}>Cadastre sua Inspeção</button>
        </Link>
        <Link to={Pagina14}>
          <button style={buttonStyle}>Agende sua Inspeção</button>
        </Link>
        <Link to={Pagina20}>
          <button style={buttonStyle}>Cancele sua Inspeção</button>
        </Link>
      </div>
    </div>
  );
}

// Redirecionamentos //

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina24() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const inputStyle = {
    borderRadius: '50px',
    border: 'none',
    padding: '10px',
    margin: '20px',
    fontSize: '20px',
    width: '300px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

 return (
    <div style={containerStyle}>
      <Link to={Pagina6}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>Informe a placa do seu veículo:</div>
      <div style={subtitleStyle}>Insira a placa do veículo:</div>
      <input type="text" style={inputStyle} value="AAA-1234" />
      <Link to={Pagina25}>
        <button style={buttonStyle}>Continue</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina25() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const inputStyle = {
    borderRadius: '50px',
    border: 'none',
    padding: '10px',
    margin: '0 20px',
    fontSize: '20px',
    width: '300px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };
  
  return (
    <div style={containerStyle}>
      <Link to={Pagina24}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>Informe a Marca e o Modelo do seu Veículo:</div>
      <div style={inputContainerStyle}>
        <input type="text" style={inputStyle} placeholder="Marca" />
        <input type="text" style={inputStyle} placeholder="Modelo" />
      </div>
      <Link to={Pagina7}>
        <button style={buttonStyle}>Continue</button>
      </Link>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina7() {
  const [selectedButton, setSelectedButton] = useState(null);

  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    color:'#767873',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    margin: '50px 0',
  };

  const buttonStyle = {
    backgroundColor: selectedButton ? (selectedButton === 'button1' ? 'white' : 'black') : 'black',
    color: selectedButton ? (selectedButton === 'button1' ? 'black' : 'white') : 'white',
    borderRadius: '50%',
    border: 'none',
    padding: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina25}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>Cadastre sua Inspeção</div>
      <div style={subtitleStyle}>Escolha a modalidade do veículo</div>
      <div style={buttonContainerStyle}>
        <Link to={Pagina29}>
        <button style={buttonStyle} onClick={() => setSelectedButton('button1')}>
          Moto-frete
        </button>
        <button style={buttonStyle} onClick={() => setSelectedButton('button2')}>
          Táxi
        </button>
        <button style={buttonStyle} onClick={() => setSelectedButton('button3')}>
          Veículo Escolar
        </button>
        <button style={buttonStyle} onClick={() => setSelectedButton('button4')}>
          Carga a Frete
        </button>
        <button style={buttonStyle} onClick={() => setSelectedButton('button5')}>
          Fretamento
        </button>
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina29() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '0 10px',
    width: '200px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  const App = {
    textAlign: 'center',
  };

  useEffect(() => {
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    if (width > height) {
      ref.current.style.height = `${width}px`;
    } else {
      ref.current.style.width = `${height}px`;
    }
  }, [text]);

  const valorStyle = {
    borderRadius: 'red',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina7}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Realize o pagamento da sua inspeção:
      </div>
      <div style={valorStyle} className="App">
        <Square text="R$206,49" />
      </div>
      <Link to={Pagina30}>
      <button style={buttonStyle}>Realizar Pagamento</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina30() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
    color: 'green',
  };

  const inputStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina29}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        Pagamento Realizado.
      </div>
      <div style={inputStyle}>
        Após a realização do pagamento, irá ser gerado um token para o seu e-mail. Através do token a sua placa, você podera prosseguir para o agendamento.
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina14() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '10px 0',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: 'auto',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina6}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>
        Agende sua Inspeção
      </div>
      <div style={textContainerStyle}>
        Insira o seu Token:
      </div>
      <div style={inputContainerStyle}>
        <input type="text" style={inputStyle} />
      </div>
      <div style={textContainerStyle}>
        Insira a placa do veículo:
      </div>
      <div style={inputContainerStyle}>
        <input type="text" style={inputStyle} />
      </div>
      <Link to={Pagina16}>
        <button style={buttonStyle}>Continuar</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina16() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
    color: 'green',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina14}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        AUTORIZADO A PROSSEGUIR
      </div>
      <Link to={pagina17}>
        <button style={buttonStyle}>Continuar</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina17() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
    color: 'black',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  const DadosStyle1 = {
    textAlign:'center',
    color:'#4395f',
  };

  const DadosStyle2 = {
    textAlign: 'center',
    color:'#767873',
  };

  const DadosStyle3 = {
    textAlign: 'center',
    color:'#767873',
  };

  const DadosStyle4 = {
    textAlign: 'center',
    color:'#767873',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina16}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        A unidade que você realizará sua inspeção está localizada no endereço abaixo:
      </div>
      <div style={DadosStyle1}>CACAU VILA LEOPOLDINA</div>
      <div style={DadosStyle2}>RUA POTSDAM,102, VILA HAMBURGUESA,</div>
      <div style={DadosStyle3}>CEP:05318-030</div>
      <div style={DadosStyle4}>FONE:11-3831-4700</div>
      <Link to={Pagina18}>
        <button style={buttonStyle}>Continuar</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina18() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '30px',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina17}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={buttonContainerStyle}>
        <Link to={Pagina19}>
          <button style={buttonStyle}>18/01 - 08:00</button>

          <button style={buttonStyle}>18/01 - 09:00</button>

          <button style={buttonStyle}>18/01 - 10:00</button>
 
          <button style={buttonStyle}>19/01 - 11:00</button>

          <button style={buttonStyle}>20/01 - 12:00</button>
  
          <button style={buttonStyle}>20/01 - 13:00</button>

          <button style={buttonStyle}>20/01 - 14:00</button>

          <button style={buttonStyle}>20/01 - 15:00</button>

          <button style={buttonStyle}>21/01 - 16:00</button>

          <button style={buttonStyle}>21/01 - 17:00</button>

          <button style={buttonStyle}>21/01 - 18:00</button>
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina19() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '30px 0',
    fontWeight: 'bold',
    color: 'green',
  };

  const messageContainerStyle = {
    backgroundColor: '#7e7973',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
    margin: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina18}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={textContainerStyle}>
        CONFIRMAÇÃO DE AGENDAMENTO
      </div>
      <div style={dadosStyle}>
        Unidade:
        Endereço:
        Data/Horário:
      </div>
      <div style={messageContainerStyle}>
        Caso necessite reagendar, o mesmo poderá ser feito com no mínimo 2h de antecedência.
      </div>
      <div style={messageContainerStyle}>
        Não serão aceitos atrasos, sugerimos que chegue com 10min de antecedência.
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina20() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const textContainerStyle = {
    textAlign: 'center',
    margin: '10px 0',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const inputStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4395ff',
    color: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina6}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>
        Cancele sua Inspeção
      </div>
      <div style={textContainerStyle}>
        Insira o seu Token:
      </div>
      <div style={inputContainerStyle}>
        <input type="text" style={inputStyle} />
      </div>
      <div style={textContainerStyle}>
        Insira a placa do veículo:
      </div>
      <div style={inputContainerStyle}>
        <input type="text" style={inputStyle} />
      </div>
      <Link to={Pagina21}>
        <button style={buttonStyle}>Continuar</button>
      </Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina21() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const subtitleStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const buttonStyleYes = {
    color: 'green',
    borderRadius:'20px',
    padding:'10px',
    margin:'20px 0',
    width: '120px',
    textAlign: 'center',
  };

  const buttonStyleNo = {
    color: 'red',
    borderRadius:'20px',
    padding:'10px',
    margin:'20px 0',
    width: '120px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <Link to={Pagina20}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>Cancelamento de Inspeção</div>
      <a href='/'>
        <img  style={imgStyle} src=""/>
      </a>
      <div style={subtitleStyle}>Você poderá realizar o cancelamento, somenteb 1 vez. Caso ja tenha realizado um cancelamento anteriormente, você não poderá reagendar novamente e o valor pago não será reembolsado. Atenção, caso você cancele o seu agendamento.
      O novo agendamento não irá alterar a UNIDADE que você realizará sua inspeção. Tem certeza que deseja continuar?</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
        <Link to={Pagina22}><button style={buttonStyleYes}>Sim</button></Link>
        <div style={{ borderLeft: '1px solid black', height: '100%' }}></div>
        <Link to={Pagina23}><button style={buttonStyleNo}>Não</button></Link>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina22() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    backgroundColor: '#4395ff',
    margin: '20px 0',
  };

  const iconStyle = {
    fontSize: '50px',
    color: 'white',
  };

  const subtitleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const imgStyle = {
    height:'50%',
    width:'50%',
    margin:'auto',
  };

  const buttonStyle1 = {
    display: "flex",
    justifyContent: "center"
  };
  
  return (
    <div style={containerStyle}>
      <Link to={Pagina21}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>Cancelamento de Inspeção</div>
      <a href='/'>
        <img style={imgStyle} src="/home/alexandre/Música/vecteezy_right-and-wrong-vector-design-illustration-isolated-on_11148557_447.png"></img>
      </a>
      <div style={subtitleStyle}>O CANCELAMENTO FOI REALIZADO COM SUCESSO.</div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Pagina23() {
  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const titleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: 'bold',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    backgroundColor: '#4395ff',
    margin: '20px 0',
  };

  const iconStyle = {
    fontSize: '50px',
    color: 'white',
  };

  const subtitleStyle = {
    textAlign: 'center',
    margin: '20px 0',
    fontWeight: '#7e7973',
  };
  
  return (
    <div style={containerStyle}>
      <Link to={Pagina21}>
        <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
      </Link>
      <div style={titleStyle}>Cancelamento de Inspeção</div>
      <div style={subtitleStyle}>Seu cancelamento não foi realizado.</div>
    </div>
  );
}

export default React
