/*Perfil Usando Props */

import { Text, View, Button } from 'react-native';

import React, { useState } from 'react';

/* export const Perfil = (props) => {
  return (
    <View>
      <Text>{props.nombre}</Text>
      <Text>{props.carrera}</Text>
      <Text>{props.materia}</Text>
      <Text>{props.semestre}</Text>


    </View>
  );
}; */


/*Perfil Usando destructuración */
export const Perfil = ({ nombre, carrera, materia, semestre }) => {

  const [mostrar, setMostrar] = useState(false);

  return (

    <View>
      <Text>{nombre}</Text>


      {mostrar && (

        <>

          <Text>{carrera}</Text>
          <Text>{materia}</Text>
          <Text>{semestre}</Text>

        </>

      )}
      
      <Button
        title="Ver perfil"
        onPress={() => setMostrar(!mostrar)}
      />

    </View>

  );

};
