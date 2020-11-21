import React, { useEffect, useState } from 'react';
import './emptyState.scss';

const emptyStateConstants = [
  {
    key: 'emp',
    image: 'remote-team.svg',
    message: 'Oops, no employee present now!',
    desc: 'Add your employee details, by which they can to part of their job',
    btnMsg: 'Add Employee',
  },
  {
    key: 'stocks',
    image: 'bills.svg',
    message: 'Looks like your godaan is empty!',
    desc: 'Add the your all supllies to keep track of it.',
    btnMsg: 'Add Stocks',
  },
  {
    key: 'transaction',
    image: 'bills.svg',
    message: 'Looks like you have not done any transactions',
    desc: 'All your transactions will get listed here.',
    btnMsg: null,
  },
  {
    key: 'supplier',
    image: 'delivery.svg',
    message: 'No supplier details present now!',
    desc: 'Add your supplier details to avoid burden in later part',
    btnMsg: 'Add Supplier',
  },
];

const EmptyState = ({ stateName }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(stateName);
    setData(emptyStateConstants.find(x => x.key === stateName));
    console.log(data);
  }, []);

  return (
    data && (
      <main className='empty'>
        <img
          src={require(`../../assets/images/${data.image}`)}
          alt={data.key}
        />
        <h2>{data.message}</h2>
        <p>{data.desc}</p>
        {data.btnMsg && <div className='empty__btn'>{data.btnMsg}</div>}
      </main>
    )
  );
};

export default EmptyState;
