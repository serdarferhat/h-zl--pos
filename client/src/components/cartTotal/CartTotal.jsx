import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import React from "react";

const CartTotal = () => {
  return (
    <div className="cart flex flex-col h-full overflow-y-auto max-h-[calc(100vh_-_150px)]">
      <h2 className="bg-blue-500 text-center py-4 px-4  text-white  tracking-wide">
        {" "}
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3  overflow-y-auto">
        <li className="cart-item flex justify-between ">
          <div className="flex items-center  ">
            <img
              src="https://wwwi.globalpiyasa.com/lib/Urun/670/be81325c8a1b34462b33c65d08dbbe7a_1.jpg "
              alt=""
              className="w-16 h-16 object-cover pt-2"
            />
            <div className="flex flex-col ml-3 ">
              {" "}
              <b>muz </b> <span>18₺x2</span>{" "}
            </div>
            </div>
            <div className="flex mt-3 gap-2">
              <Button
                type="primary"
                size="small"
                className="w-full mt-2 flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />{" "}
              <span className="mt-2">1</span>
              <Button
                type="primary"
                size="small"
                className="w-full mt-2 flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
                danger
              />
            </div>
          
        </li>
        <li className="cart-item flex justify-between ">
          <div className="flex items-center  ">
            <img
              src="https://wwwi.globalpiyasa.com/lib/Urun/670/be81325c8a1b34462b33c65d08dbbe7a_1.jpg "
              alt=""
              className="w-16 h-16 object-cover pt-2"
            />
            <div className="flex flex-col ml-3 ">
              {" "}
              <b>muz </b> <span>18₺x2</span>{" "}
            </div>
            </div>
            <div className="flex mt-3 gap-2">
              <Button
                type="primary"
                size="small"
                className="w-full mt-2 flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />{" "}
              <span className="mt-2">1</span>
              <Button
                type="primary"
                size="small"
                className="w-full mt-2 flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
                danger
              />
            </div>
          
        </li>
        <li className="cart-item flex justify-between ">
          <div className="flex items-center  ">
            <img
              src="https://wwwi.globalpiyasa.com/lib/Urun/670/be81325c8a1b34462b33c65d08dbbe7a_1.jpg "
              alt=""
              className="w-16 h-16 object-cover pt-2"
            />
            <div className="flex flex-col ml-3 ">
              {" "}
              <b>muz </b> <span>18₺x2</span>{" "}
            </div>
            </div>
            <div className="flex mt-3 gap-2">
              <Button
                type="primary"
                size="small"
                className="w-full mt-2 flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />{" "}
              <span className="mt-2">1</span>
              <Button
                type="primary"
                size="small"
                className="w-full mt-2 flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
                danger
              />
            </div>
          
        </li>
      </ul>
      <div className="cart-totals mt-80">
        <div className="border-t border-b mt-2 ">
          <div className="p-2 flex  justify-between">
            <b>Ara Toplam</b>
            <span>95₺</span>
            <b>KDV %8</b>
            <span className="text-red-600">+3.20₺</span>
          </div>
        </div>
        <div className="border-t mt-1 ">
          <div className="p-2 flex justify-between text-lg">
            <b className="text-green-500">Genel Toplam:</b>
            <span className="text-2xl">98.2₺</span>
          </div>
        </div>
      </div>
      <div className="button py-3 px-2">
        <Button type="primary" size="large" className="w-full">
          Sipariş Oluştur
        </Button>
        <Button
          type="primary"
          size="large"
          className="w-full mt-2 flex items-center justify-center"
          icon={<ClearOutlined />}
          danger
        >
          Temizle
        </Button>
      </div>
    </div>
  );
};

export default CartTotal;
