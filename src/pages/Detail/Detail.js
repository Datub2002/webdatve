import React, { useEffect, useState } from 'react';
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import '../../assets/styles/circle.css';
import { Radio, Rate, Space, Tabs } from 'antd';
import { StarOutlined } from '@ant-design/icons/lib/icons/index';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhim } from '../../Redux/Actions/TheaterManageAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
function Detail(props) {
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };
    const { filmDetail } = useSelector(state => state.MovieManageReducer);
    console.log({ filmDetail });
    const dispatch = useDispatch();

    useEffect(
        () => {
            // lay thong tin param tu url
            let { id } = props.match.params;
            dispatch(layThongTinChiTietPhim(id))
        }

        , [])


    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: `url(${filmDetail.hinhAnh})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%'

        }}>

            <CustomCard
                style={{

                    minHeight: '100vh',
                    paddingTop: 150
                }}
                effectColor="#fff" // required
                color="#FFF" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className='grid grid-cols-12' >
                    <div className='col-span-6 col-start-3'>
                        <div className='grid grid-cols-3'>
                            <img className='col-span-1'
                                src={filmDetail.hinhAnh}
                                alt='123'
                                style={{
                                    width: '100%'

                                }} />
                            <div className='col-span-2 ml-5'
                                style={{
                                    marginTop: '25%'
                                }}
                            >
                                <p className='text-base font-semibold '>Ngày Khởi Chiếu :  {moment((filmDetail.ngayKhoiChieu)).format('DD.MM.YYYY')} </p>
                                <p className='text-2xl font-medium'>{filmDetail.tenPhim}</p>
                                <p>{filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <h1 style={
                            {
                                marginLeft: '15%',
                                color: 'yellow',
                                fontWeight: 'bold',
                                fontSize: '15px'
                            }
                        }>
                            Đánh giá
                        </h1>
                        <h1
                            style={{
                                marginLeft: '10%',

                            }}
                        >
                            <Rate
                                style={{
                                    color: '#1890ff'
                                }}
                                allowHalf defaultValue={filmDetail.danhGia / 2} />
                        </h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span>{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className='mt-10 ml-72 w-2/3 container bg-white px-5 py-5'>
                    <Tabs style={{
                        minHeight: 200
                    }} defaultActiveKey="1"
                        items={[
                            { label: "Lịch Chiếu", key: "1", children: (
                                <div>
                                <Tabs
                                    tabPosition={'left'}
                                    items={filmDetail.heThongRapChieu?.map((htr, i) => {
                                        return {
                                            label: (
                                                <div className='flex flex-col items-center'>
                                                    <img src={htr.logo} alt={htr.logo} className="rounded-full" width="50" />
                                                    <div className='text-base font-medium '>
                                                        {htr.tenHeThongRap}
                                                    </div>
                                                </div>
                                            ),
                                            key: `${i}`,
                                            children: (
                                                htr.cumRapChieu?.map((cumRap,i) =>{
                                                    return <div className='mt-5'>
                                                         <div className='flex flex-row'>
                                                            <img src={cumRap.hinhAnh} alt='123' style={{
                                                                width :55,
                                                                height : 55
                                                            }}  />
                                                            <div className='ml-2'>
                                                                <p className='text-xl font-bold leading-3'>{cumRap.tenCumRap}</p>
                                                                <p className='text-base font-medium text-gray-400'>{cumRap.diaChi}</p>

                                                            </div>
                                                         </div>  
                                                         <div className='grid grid-cols-3'>
                                                            {cumRap.lichChieuPhim?.slice(0,4).map((lichChieu,i) =>{
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`}
                                                                    key={i}
                                                                    className="col-span-1 text-green-800 font-bold"
                                                                >
                                                                    {moment((lichChieu.ngayChieuGioChieu)).format('hh:mm A')}
                                                                </NavLink>
                                                            })}
                                                         </div>


                                                    </div>
                                                })

                                            )
                                               
                                                
                                        };
                                    })}
                                />
                           </div> 
                            ) }, 
                            { label: 'Thông Tin', key: "2", children: 'Thông Tin' },
                            { label: 'Đánh Giá', key: "3", children: 'Đánh Giá' },
                        ]}  
                        /* <Tabs.TabPane tab="Lịch Chiếu" key="1"
                            style={{
                                minHeight: 200
                            }}
                        >
                           <div>
                                <Tabs
                                    tabPosition={'left'}
                                    items={filmDetail.heThongRapChieu?.map((htr, i) => {
                                        return {
                                            label: (
                                                <div className='flex flex-col items-center'>
                                                    <img src={htr.logo} alt={htr.logo} className="rounded-full" width="50" />
                                                    <div className='text-base font-medium '>
                                                        {htr.tenHeThongRap}
                                                    </div>
                                                </div>
                                            ),
                                            key: `${i}`,
                                            children: (
                                                htr.cumRapChieu?.map((cumRap,i) =>{
                                                    return <div className='mt-5'>
                                                         <div className='flex flex-row'>
                                                            <img src={cumRap.hinhAnh} alt='123' style={{
                                                                width :55,
                                                                height : 55
                                                            }}  />
                                                            <div className='ml-2'>
                                                                <p className='text-xl font-bold leading-3'>{cumRap.tenCumRap}</p>
                                                                <p className='text-base font-medium text-gray-400'>{cumRap.diaChi}</p>

                                                            </div>
                                                         </div>  
                                                         <div className='grid grid-cols-3'>
                                                            {cumRap.lichChieuPhim?.slice(0,4).map((lichChieu,i) =>{
                                                                return <NavLink to="/"
                                                                    key={i}
                                                                    className="col-span-1 text-green-800 font-bold"
                                                                >
                                                                    {moment((lichChieu.ngayChieuGioChieu)).format('hh:mm A')}
                                                                </NavLink>
                                                            })}
                                                         </div>


                                                    </div>
                                                })

                                            )
                                               
                                                
                                        };
                                    })}
                                />
                           </div>     
                        </Tabs.TabPane>   */
                         
                    />
                </div>

            </CustomCard>
        </div>
    );
}

export default Detail;