import React  from 'react';
import { useNavigation } from '@react-navigation/native';
import { AffichageMatch } from '../components/AffichageMatch';


export default function MatchRow({item}) {

    const navi = useNavigation();

    function infoPressed ({item}){
        navi.navigate('Info', {
            item
        })
    }      

    return(
        <AffichageMatch
            key={item.id}
            item={item}
            handleSubmit={infoPressed}
            isButton={true}
        />
    );
}

