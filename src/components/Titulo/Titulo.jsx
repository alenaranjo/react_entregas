export const Titulo = ({ titulo = 'OTRO', subtitulo = 'subtitulo', saludo = 'saludos a todos' }) => {
    return (
      <div style={{border: '1px solid green'}}>
        <h1 className='h1'>{titulo}</h1>
        <h2 className='h2'>{subtitulo}</h2>
        <p>{saludo}</p>
      </div>
    );
  };