import React from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../theme';
import { Level } from '../styleds';
import './styles.css';

const TableWrapper = styled.div`
  border: 1px solid #707070;
  border-radius: 20px;
  overflow-y: hidden;
  margin-bottom: 20px;
  width: 100%;
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 10rem 2rem 1fr 3fr;
  width: 100%;
  grid-row-gap: 2px;
  font-size: 0.8rem;
  height: 108px;
  overflow-y: scroll;
    align-items: center;


  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: none;
  }
  //
  &::-webkit-scrollbar-track {
    width: 2px;
    background: #707070;
    border: 2px solid white;
  }
  &::-webkit-scrollbar-thumb {
    width: 3px;
    max-height: 5px;
    background: #707070;
    border-radius: 20px;
  }

  > div {
    height: 35px;
    display: flex;
    align-items: center;
  }
  > div:nth-child(8n + 1) {
    background: #e4e5e7;
  }
  > div:nth-child(8n + 2) {
    background: #e4e5e7;
  }
  > div:nth-child(8n + 3) {
    background: #e4e5e7;
  }
  > div:nth-child(8n + 4) {
    background: #e4e5e7;
  }
`;

const Date = styled.div`
    padding-left: 1rem;
`

const Cost = styled.div`
  > span {
    font-weight: 600;
    color: #000000;
  }
`;

const Wallet = styled.div`
  font-weight: 600;
  color: #000000;
  padding-right: 1rem;

`;

const purchaseList = [
  {
    date: '20 Dec 2020, 19:16:31',
    value: '5999.92',
    wallet: 'Txhash  0xad91394d4894…533357ca4ce6418d06fd4a',
  },
  {
    date: '2 Jan 2020, 19:16:31',
    value: '599.92',
    wallet: 'Txhash  0xad91dddd4894…533357ca4ce6418d06fd4a',
  },
  {
    date: '9 Feb 2020, 19:16:31',
    value: '59988.92',
    wallet: 'Txhash  0xad91dddd4894…533357ca4ce6418d06fd4a',
  },
  {
    date: '20 Dec 2020, 19:16:31',
    value: '5999.92',
    wallet: 'Txhash  0xad91394d4894…533357ca4ce6418d06fd4a',
  },
  {
    date: '2 Jan 2020, 19:16:31',
    value: '599.92',
    wallet: 'Txhash  0xad91dddd4894…533357ca4ce6418d06fd4a',
  },
  {
    date: '9 Feb 2020, 19:16:31',
    value: '59988.92',
    wallet: 'Txhash  0xad91dddd4894…533357ca4ce6418d06fd4a',
  },
];

export const PurchaseHistory = () => {
  return (
    <>
      <TYPE.mediumHeader>Your Purchase History</TYPE.mediumHeader>
      <TableWrapper>
        <Table id={'test'} className="mostly-customized-scrollbar">
          {purchaseList.map(purchase => (
            <>
              <Date>{purchase.date}</Date>
              <div />
              <Cost>
                <span>{purchase.value}</span>&nbsp; ESW
              </Cost>
              <Wallet>{purchase.wallet}</Wallet>
            </>
          ))}
        </Table>
      </TableWrapper>

      <TYPE.mediumHeader>Referal Purchase History</TYPE.mediumHeader>
      <TableWrapper>
        <Table>
          {purchaseList.map(purchase => (
            <>
              <Date>{purchase.date}</Date>
              <div>
                <Level>1lvl</Level>
              </div>
              <Cost>
                <span>{purchase.value}</span>&nbsp; ESW
              </Cost>
              <Wallet>{purchase.wallet}</Wallet>
            </>
          ))}
        </Table>
      </TableWrapper>
    </>
  );
};
