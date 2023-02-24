import React from 'react';
import { useTranslation } from 'react-i18next';



function Film(props) {

    const {film} = props;

    const {t, i18n} = useTranslation();

    const handleChange = (value) =>{
        console.log('value',value);
    }

    return (
        
            <div className="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                <div
                    style={{background : `url(${film.hinhAnh}) no-repeat center`, backgroundSize:'cover'}}
                >
                    <img src={film.hinhAnh} alt={film.tenPhim} className='opacity-0 w-full ' style={{height:'200px'}} />
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 mt-2 h-16">{film.tenPhim}</h1>
                <p className="leading-relaxed mb-3 h-16">{film.moTa.length > 150 ? <p>{film.moTa.slice(0,100)} ... </p> : <p>{film.moTa}</p> }</p>
                <a onChange={handleChange}
                 className="text-indigo-500 inline-flex items-center text-lg"> {t('ĐẶT VÉ')}
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </a>
               
            </div>
        
    );
}

export default Film;