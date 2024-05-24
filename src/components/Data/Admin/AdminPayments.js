import { ref } from 'vue';

export function adminPaymentsData() {
  const nameBtn = ['Add Payments'];
  const nameTh = ['User', 'Balance', 'Payout', 'Deposit', 'System', 'Date', 'Approve'];

  const nameTd = ref([
    {
      user: 'Nikelodeon',
      balance: '$100 | 100 DOIT',
      payout: '$20',
      deposit: '0',
      system: 'Paypal',
      datePay: '07/21/17',
      label: ['yes', 'no', 'info'],
    },
    {
      user: 'beautifulmouse112',
      balance: '$120 | 100 DOIT',
      payout: '0',
      deposit: '$100',
      system: 'BTC',
      datePay: '07/21/17',
      label: ['sent'],
    },
    {
      user: 'lazymeercat616',
      balance: '$0 |  0 DOIT',
      payout: '0',
      deposit: '$20',
      system: 'QIWI',
      datePay: '07/21/17',
      label: ['declined'],
    },
    {
      user: 'whiterabbit554',
      balance: '$40 |  0 DOIT',
      payout: '$40',
      deposit: '0',
      system: 'QIWI',
      datePay: '07/21/17',
      label: ['sent'],
    },
    {
      user: 'ticklishostrich764',
      balance: '$40 |  0 DOIT',
      payout: '$50',
      deposit: '0',
      system: 'DOIT',
      datePay: '07/21/17',
      label: ['yes', 'no', 'info'],
    },
    {
      user: 'tinypanda866',
      balance: '$40 |  0 DOIT',
      payout: '$40',
      deposit: '0',
      system: 'Paypal',
      datePay: '07/21/17',
      label: ['yes', 'no', 'info'],
    },
    {
      user: 'smallsnake312',
      balance: '$40 |  0 DOIT',
      payout: '$40',
      deposit: '0',
      system: 'Paypal',
      datePay: '07/21/17',
      label: ['yes', 'no', 'info'],
    },
    {
      user: 'silverduck204',
      balance: '$40 |  0 DOIT',
      payout: '$40',
      deposit: '0',
      system: 'Paypal',
      datePay: '07/21/17',
      label: [],
    },
    {
      user: 'beautifullion765',
      balance: '$40 |  0 DOIT',
      payout: '$40',
      deposit: '0',
      system: 'Paypal',
      datePay: '07/21/17',
      label: [],
    },
    {
      user: 'bluebear234',
      balance: '$40 |  0 DOIT',
      payout: '$40',
      deposit: '0',
      system: 'Paypal',
      datePay: '07/21/17',
      label: [],
    },
  ]);

  return { nameBtn, nameTd, nameTh };
}
