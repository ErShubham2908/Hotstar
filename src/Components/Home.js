import React, { useContext } from 'react'
import "./Style.css";
import {store} from './ContextApi';

const Home = () => {
  const [contextData] = useContext(store);
  // console.log(contextData)

  return (
  <>
    <p className='item_trending'>Latest & Trending</p>
    <div className='parent_item'>
      {
        contextData.filter((item) => item.id % 2 === 0).map((data) => {
          return(
              <div className='item_img_parent'>
                <img className='item_image' src={data.Pimg} alt='Not found'/>
                <p className='item_name'>{data.name}</p>
              </div>
          )
        })
      }
    </div>

    <p className='item_trending'>Popular Show</p>
    <div className='parent_item'>
      {
        contextData.filter((item) => item.catagory === "Serial").map((data) => {
          return(
              <div className='item_img_parent'>
                <img className='item_image' src={data.Pimg} alt='Not found'/>
                <p className='item_name'>{data.name}</p>
              </div>
          )
        })
      }
    </div>

      {/* Popular Ation */}
    <p className='item_trending'>Popular in Action</p>
    <div className='parent_item'>
      {
        contextData.filter((item) => item.subCatagory === "Marvel").map((data) => {
          return(
              <div className='item_img_parent'>
                <img className='item_image' src={data.Pimg} alt='Not found'/>
                <p className='item_name'>{data.name}</p>
              </div>
          )
        })
      }
    </div>

      {/* Popular Sport */}

    <p className='item_trending'>Sport</p>
    <div className='parent_item'>
      {
        contextData.filter((item) => item.catagory === "Sport" || item.subCatagory === "Cricket").map((data) => {
          return(
              <div className='item_img_parent'>
                <img className='item_image' src={data.Pimg} alt='Not found'/>
                <p className='item_name'>{data.name}</p>
              </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Home