import React from 'react'

import ItemsCarousel from 'react-items-carousel';
import { Box } from '@material-ui/core'

const ActorImages = ({images}) => {
    console.log('this is images', images)
    return (
        <Box>
            <ItemsCarousel>

            </ItemsCarousel>
        </Box>
    )
}
export default ActorImages