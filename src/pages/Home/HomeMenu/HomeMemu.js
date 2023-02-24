import { Radio, Space, Tabs } from 'antd';
import moment from 'moment';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom'

function HomeMemu(props) {
    const [tabPosition, setTabPosition] = useState('left');
    console.log('props123',props);
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
   

    const renderHTR = () =>{
       return props.quanLyRapChieu.map((item, i) => {
            const id = String(i + 1);
            return {
                label: (<img src={item.logo} alt={item.logo} className="rounded-full" width="50"/>),
                key:id,
                children:(
                    <Tabs
                        tabPosition={tabPosition}
                        items={
                            item.lstCumRap.map((cumRap, i) => {
                                const id = String(i + 1);
                                return {
                                    label: (
                                        <div className='w-80 flex'>
                                            <img src={cumRap.hinhAnh} alt={cumRap.hinhAnh}  width="50"/>
                                            <div className='ml-2'>
                                               <div className='text-base font-medium'>
                                                    {cumRap.tenCumRap}
                                               </div> 
                                                <div className='text-sm text-left text-red-400'>Chi Tiết</div>
                                            </div>
                                        </div>
                                    ),
                                    key:id,
                                   children : (
                                    cumRap.danhSachPhim.slice(0,5).map((phim,i) =>{
                                        return <div key={i}>
                                            <div className='my-5'>
                                                <div className='flex'>
                                                    <img className='w-20 h-20' src={phim.hinhAnh} alt={phim.hinhAnh}/>
                                                    <div className='ml-2'>
                                                        <h1 className='text-green-700 text-2xl'>{phim.tenPhim}</h1>
                                                        <p className='text-base'>{cumRap.diaChi}</p>
                                                        <div className='grid grid-cols-6 gap-4'>

                                                            {phim.lstLichChieuTheoPhim?.slice(0,12).map((lichChieu,i) =>{
                                                                return <NavLink className='text-xl text-orange-500' key={i} to={`/checkout/${lichChieu.maLichChieu}`}>
                                                                        {moment(lichChieu.ngayChieuGioChieu).format('h:m A')}
                                                                </NavLink>
                                                            })
                                                                
                                                            }
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                   )

                                        
                                    

                                    
                                }
                        })
                        
                        }
                    />
                )
                    }
        
    })
}

    return (
   
    
        <>
            <Space
                style={{
                    marginBottom: 24,
                }}
            >
               
            </Space>
            <Tabs
                tabPosition={tabPosition}
                items={renderHTR()}
            />
        
        </>
    );
}

export default memo(HomeMemu);