import React from 'react';

const ProgressBar = (props) => {
    const { width, startDate, endDate, currentDate } = props;

    // Calcula a duração total em milissegundos
    const totalDuration = new Date(endDate) - new Date(startDate);

    // Calcula o tempo decorrido em milissegundos
    const elapsedDuration = new Date(currentDate) - new Date(startDate);

    // Calcula a porcentagem de progresso
    const percent = elapsedDuration / totalDuration;

    const outerStyle = {
        width: `${width}px`,
        height: '10px',
        backgroundColor: '#0B1633',
    };

    const innerStyle = {
        width: `${width * percent}px`,
        height: '100%',
        backgroundColor: '#C7FF00',
    };

    return (
        <div style={outerStyle}>
            <div style={innerStyle} />
        </div>
    );
};

export default ProgressBar;
