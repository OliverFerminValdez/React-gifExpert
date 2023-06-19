import {useEffect, useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState(''); //Aqui otra vez se utilizara useState pero para anclar el valor del input en el cual se escribe.

  const onInputChanged = (event) => { //Esta funcion solo se ejecutara cuando se emita un cambio en el elemento input de este componente,
    setInputValue(event.target.value); //El valor del input cambiara por lo tanto 
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
}

  return (
    <>
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChanged}
            />  
        </form>
    </>
  )
}
