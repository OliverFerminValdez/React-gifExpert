import {useState} from 'react' //Exportacion de react por lo regular no hay que hacerlo de forma explicita desde React 18
import { AddCategory } from './components/AddCategory'; //Add Category es el componente nuevo que cree para cumplir el principio S, es decir habra un componente solo para el input de la informacion ya que este puede usarse en otros componentes
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);  //El use state es un hook (ver definicion) que ata el estado de la aplicacion a un valor y a una funcion que asigna ese valor
    //Cuando se llama la funcion setCategories y cambia el valor del primer parametro le dice a react que renderice el componente y cambie su estado, esto lo hace de forma eficiente
    //El use state definira como sera el estado inicial o valor inicial de la informacion del primer parametro 

  const onAddCategory = (newCategory) => { //Esta funcion se llamara cuando se le de click al boton, dentro de esta funcion esta el segundo parametro de UseState que lo que hace es cambiar el valor inicial y por lo tanto volver a renderizar
    if(categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]); //Lo que hace es setear el valor (arreglo de strings), como una copia del arreglo existente con el operador spread, y al lado le pone la nueva categoria.
  }
 
  return ( //Esto es lo que retorna el componente, los componentes son functional components es decir son funciones que devuelven codigo Javascript, DOM y XML
    <>
        <h1>GifExpertApp works</h1>

        <AddCategory 
            onNewCategory = { onAddCategory } //OnNewCategory es una propiedad que le pasare al componente hijo que en este caso es addCategory, esta propiedad consiste en lo que se ejecutara cuando se añada la categoria
        />

            {categories.map(category => (
                <GifGrid key={category} category={category}/>
            ))}
    </>
  )
}
