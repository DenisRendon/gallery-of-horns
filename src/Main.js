import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
class Main extends React.Component {
    render (){
        let dataArr = data;
        return (
            {
                dataArr.map(
                    e=>(
                        <HornedBeast key={e._id} title={e.title} description={e.description} imageUrl={e.image_url} />
                    )
                )
            }
            // <HornedBeast title={'Beastly'} description={'Big hairy baest'} imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}/>
        );
    }
}
export default Main;