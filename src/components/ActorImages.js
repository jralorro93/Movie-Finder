import React, {useState, useEffect} from 'react'

import ItemsCarousel from 'react-items-carousel';
import { Box } from '@material-ui/core'

const ActorImages = ({images}) => {
    const [ children, setChildren ] = useState([])
    const [ activeItemIndex, setActiveItemIndex ] = useState(0)
    
    const changeActiveItem = (activeItemIndex) => {
        setActiveItemIndex({activeItemIndex})
    }
    console.log('this is images', images)
    return (
        <Box>
            <ItemsCarousel
                enablePlaceholder
                numberOfPlaceholderItems={images.profiles.length + 2}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}
                
                numberOfCards={images.profiles.length}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}

                requestToChangeActive={changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}        
            >
               {images.profiles.map((image, i) => {
                    return (<div 
                        key={i}
                        style={{
                            height: '400px',
                            background: `url(https://image.tmdb.org/t/p/w500${image.file_path})`
                        }}
                    />)
               })}
            </ItemsCarousel>
        </Box>
    )
}
export default ActorImages