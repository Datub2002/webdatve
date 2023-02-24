const {createProxyMiddleware} = require("http-proxy-middleware");



module.exports = app =>{
        app.use(
            createProxyMiddleware(
            '/api/QuanLyPhim/LayDanhSachBanner',
            {
                target: 'http://movieapi.cyberlearn.vn',
                changeOrigin:true
            }

        )
       

        )
        app.use(
            createProxyMiddleware(
            '/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00',
            {
                target: 'http://movieapi.cyberlearn.vn',
                changeOrigin:true
            }

        ),
       

        )
        app.use(
            createProxyMiddleware(
            '/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00',
            {
                target: 'http://movieapi.cyberlearn.vn',
                changeOrigin:true
            }

        ),
       

        )
        app.use(
            createProxyMiddleware(
            '/api/QuanLyRap/LayThongTinHeThongRap',
            {
                target: 'http://movieapi.cyberlearn.vn',
                changeOrigin:true
            }

        ),
       

        )


}