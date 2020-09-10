import React from 'react'
import { AffichageMatch } from '../components/AffichageMatch';

export default function getInfos({ route }) {
    const { item } = route.params
    return(
        <AffichageMatch
            key={item.id}
            item={item}
        />
    )
}

