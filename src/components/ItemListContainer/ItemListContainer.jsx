export const ItemListContainer = ({ titulo = 'Bienvenidos', subtitulo = 'Greetings' }) => {
    return (
      <div style={{border: '1px solid #00f7ff'}}>
        <h1 className='h1'>{titulo}</h1>
        <h2 className='h2'>{subtitulo}</h2>
      </div>
    );
  };