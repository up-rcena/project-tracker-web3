import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  // {  //  Transaction
  //   label: 'Transactions',
  //   href: '/transactions',
  // }, // End transaction
  // { // Transfer 
  //   label: 'Transfers',
  //   href: '/transfers',
  //   children: [
  //     {
  //       label: 'SPL',
  //       subLabel: 'Get your SPL transfers',
  //       href: '/transfers/spl',
  //       logo: 'token',
  //     },
  //     {
  //       label: 'NFT',
  //       subLabel: 'Get your NFT transfers',
  //       href: '/transfers/nft',
  //       logo: 'lazyNft',
  //     },
  //   ],
  // }, // End Transfer
  {
    label: 'Balances',
    href: '/balances/nft',
    // children: [
    //   {
    //     label: 'NFT',
    //     subLabel: 'Get your NFT balances',
    //     href: '/balances/nft',
    //     logo: 'pack',
    //   },
    // ],
  },
  {
    label: 'NFT Minter',
    href: '/nftMinter',
  },
];

export default NAV_LINKS;
