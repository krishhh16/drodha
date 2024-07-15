import React from 'react';

const Orderbook = ({ data }: {data: {price: number, size: number, total: number, type: "sell" | "buy"}[]}) => {
  return (
        <tbody>
          {data.map((order, index) => (
            <tr key={index} className={ (order.type === 'sell' ? 'text-red-500' : 'text-green-500')}>
              <td className="text-left font-extralight text-[0.6vw]">{order.price.toFixed(1)}</td>
              <td className="text-center text-[0.6vw] font-extralight">{order.size.toFixed(2)}</td>
              <td className="text-right text-[0.6vw] font-extralight">{order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
  );
};

export default Orderbook;