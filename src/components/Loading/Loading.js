import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Loading() {

    const {isLoading} = useSelector( state => state.LoadingReducer);





  return ( 
        <Fragment>
            {isLoading ?
                <div className='fixed top-0 left-0 w-full flex justify-center items-center z-10 h-full '
                    style={{
                        backgroundColor : 'rgba(0,0,0,.4)'
                    }}
                >
                    <div className='text-4xl'>
                        Loading...
                    </div>


                </div> : ''
             }
        </Fragment>
  )
  
  
}
