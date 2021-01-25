import React from 'react'

const makanan=[
    {
        nama:"Sate",
        harga:15000
    },
    {
        nama:"Baso",
        harga:10000
    },
    {
        nama:"Nasi Goreng",
        harga:20000
    },
    {
        nama:"Ayam Geprek",
        harga:13000
    },
    {
        nama:"Bubur",
        harga:12000
    },
];

//Reduce untuk operasi aritmatika
//menambahkan total harga makanan dari objek makanan
const total_bayar=makanan.reduce((total_harga,detail_harga)=>{
    return total_harga+detail_harga.harga;
},0)
const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanan.map((item,index)=>(
                    <li>{index+1}.{item.nama} : {item.harga}</li> 
                ))}
            </ul>

            <h2>Map Filter Harga antara 12k-16k</h2>
            <ul>
                {makanan.filter((item)=>item.harga >12000 && item.harga <16000 ).map((item,index)=>(
                        <li>{index+1}.{item.nama} : {item.harga}</li> 
                    ))}
            </ul>

            <h3>Total Bayar : {total_bayar}</h3>
        </div>
    )
}

export default Map
