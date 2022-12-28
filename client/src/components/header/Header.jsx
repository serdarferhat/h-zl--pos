import React from "react";
import { Badge, Input } from 'antd';
import { SearchOutlined,HomeOutlined,ShoppingCartOutlined,SnippetsOutlined,UserOutlined,BarChartOutlined,LoginOutlined } from '@ant-design/icons';
const Header = () => {
  return (
    <div className="border-b mb-3">
      <header className="py-4 px-6 gap-10 flex justify-between items-center">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl"> LOGO</h2>
          </a>
        </div>
        <div className="search flex-1 flex justify-center ">
          <Input
          className="rounded-full max-w-[1000px]"
            size="large"
            placeholder="search"
            prefix={<SearchOutlined /> }
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-2 py" >
           <a  className="menu-link flex flex-col hover:text-[#40a9ff]" href={"/"} >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Ana Sayfa</span>
           </a>
           <Badge count={5} offset={[1,7]} className="md:flex hidden"><a  className="menu-link flex flex-col hover:text-[#40a9ff]" href={"/"} >
           <ShoppingCartOutlined className="md:text-2xl text-xl"/>
           <span className="md:text-[12px] text-[10px]">Sepet</span>
           </a></Badge>
           
           <a  className="menu-link flex flex-col hover:text-[#40a9ff]" href={"/"} >
           <SnippetsOutlined  className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Fatura</span>
           </a>
           <a  className="menu-link flex flex-col hover:text-[#40a9ff]" href={"/"} >
           <UserOutlined  className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Müşteriler</span>
           </a>
           <a  className="menu-link flex flex-col hover:text-[#40a9ff]" href={"/"} >
           <BarChartOutlined  className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">İstatislik</span>
           </a>
           <a  className="menu-link flex flex-col hover:text-[#40a9ff]" href={"/"} >
           <LoginOutlined  className="md:text-2xl text-xl" />
            <span className="md:text-[12px] text-[10px]">Çıkış</span>
           </a>
          
        </div>
        <Badge count={5} offset={[1,7]} className="md:hidden flex" ><a  className="menu-link flex flex-col hover:text-[#40a9ff]" href={"/"} >
           <ShoppingCartOutlined className="md:text-2xl "/>
           <span className="md:text-[12px] text-[10px]">Sepet</span>
           </a></Badge>
      </header>
    </div>
  );
};

export default Header;
