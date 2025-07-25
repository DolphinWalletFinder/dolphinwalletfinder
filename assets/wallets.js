function simulateScan() {
  const wallets = [
  {
    "address": "0x393c80505edbbf019ad2d54714f672beb2c04801",
    "balance": "1.703 BTC",
    "network": "Bitcoin",
    "lastTx": "2019-11-27 03:17"
  },
  {
    "address": "0x2a0fe9d2322cfce50d5ee0216fc5e822dd29658c",
    "balance": "149.796 ETH",
    "network": "Base",
    "lastTx": "2020-11-26 20:10"
  },
  {
    "address": "0x563d96bcb7559c12d1a5f7a173de91e1c12f2f77",
    "balance": "3.066 BTC",
    "network": "Bitcoin",
    "lastTx": "2020-11-04 09:46"
  },
  {
    "address": "0xcaad8a8e750737dcf0a095208581fe4c70619fc4",
    "balance": "1926266.667 TRX",
    "network": "Tron",
    "lastTx": "2019-01-12 15:24"
  },
  {
    "address": "0xfa1d8661cff126978a950b1c12bd92a00c32cae3",
    "balance": "836.27 BNB",
    "network": "BNB Chain",
    "lastTx": "2021-09-22 07:34"
  },
  {
    "address": "0x207838c5f8a93e303b0c9810374f56c9f3f00603",
    "balance": "153.989 ETH",
    "network": "Base",
    "lastTx": "2018-02-27 17:52"
  },
  {
    "address": "0xde123278d0f97de8c99c739848a7b5565a952aaa",
    "balance": "4.025 BTC",
    "network": "Bitcoin",
    "lastTx": "2019-09-19 16:20"
  },
  {
    "address": "0x6eda3e2fd633c0bddefbc7b262875d23eb3fb643",
    "balance": "5.333 BTC",
    "network": "Bitcoin",
    "lastTx": "2017-01-15 10:53"
  },
  {
    "address": "0xb90d05b9204a077ea10f0580b5c1c01e2a388579",
    "balance": "111.459 ETH",
    "network": "Base",
    "lastTx": "2017-09-05 01:34"
  },
  {
    "address": "0x89ddb5c72976185b42f73b4388929d1a46f5efbd",
    "balance": "1014.5 BNB",
    "network": "BNB Chain",
    "lastTx": "2019-03-27 07:57"
  },
  {
    "address": "0x775aefc23942ba44c765072e525c288763f8adf8",
    "balance": "9.38 BTC",
    "network": "Bitcoin",
    "lastTx": "2017-08-22 10:23"
  },
  {
    "address": "0xd2e6c4217f6ff7368730b97f1ace10d60c3aeb13",
    "balance": "66.387 ETH",
    "network": "Base",
    "lastTx": "2020-07-07 10:49"
  },
  {
    "address": "0x5c3e9f6f827e1a2115389f1423466a1fc2f935c2",
    "balance": "910.809 BNB",
    "network": "BNB Chain",
    "lastTx": "2017-10-07 01:05"
  },
  {
    "address": "0x82053225dce4e4c923a702596ed2ddee7e2d03dc",
    "balance": "1039.758 SOL",
    "network": "Solana",
    "lastTx": "2021-03-13 03:54"
  },
  {
    "address": "0xcffa8d8f313526cf7a7521d1faec103f535a3802",
    "balance": "5.294 BTC",
    "network": "Bitcoin",
    "lastTx": "2021-08-16 13:48"
  },
  {
    "address": "0xa44746a3bab299e1b760bdbaa2374c997205490b",
    "balance": "460.383 BNB",
    "network": "BNB Chain",
    "lastTx": "2019-06-15 13:59"
  },
  {
    "address": "0xe81617741265f7827cac9c5266aed59ff0c4e23f",
    "balance": "100.222 ETH",
    "network": "Ethereum",
    "lastTx": "2017-04-25 08:30"
  },
  {
    "address": "0xafaadad84bbb1644ad70fbf86eda60f9d3a1934b",
    "balance": "2968033.333 TRX",
    "network": "Tron",
    "lastTx": "2019-12-05 23:32"
  },
  {
    "address": "0xcd6919db13aaf92cf85cc15533744949209958d0",
    "balance": "408.874 BNB",
    "network": "BNB Chain",
    "lastTx": "2019-09-11 23:47"
  },
  {
    "address": "0xd00ad1b07f798b6cdf63d830fe9a5ab274c1c10e",
    "balance": "1220.916 SOL",
    "network": "Solana",
    "lastTx": "2019-11-02 06:10"
  },
  {
    "address": "0xc916ff10a1477d15f3f3f48d63627293afd77878",
    "balance": "8.129 BTC",
    "network": "Bitcoin",
    "lastTx": "2020-06-25 09:38"
  },
  {
    "address": "0x1f54c78068f7127bdab1a16185f8522800d64fa3",
    "balance": "3119.705 SOL",
    "network": "Solana",
    "lastTx": "2020-06-12 05:54"
  },
  {
    "address": "0x4d24772293c6520be02e7b62e16c147b418d867d",
    "balance": "154.187 ETH",
    "network": "Base",
    "lastTx": "2017-12-23 22:44"
  },
  {
    "address": "0xa807eb8daae534ab70232995bcc068e3c32defd3",
    "balance": "44.786 ETH",
    "network": "Base",
    "lastTx": "2017-12-22 11:11"
  },
  {
    "address": "0x24407a1e2b10db011d69e5945bf7380a3d0cb088",
    "balance": "59.936 ETH",
    "network": "Ethereum",
    "lastTx": "2020-02-20 11:04"
  },
  {
    "address": "0x2fff477f1e2fcb3bb0c87fd1f79d18c3583ea4bb",
    "balance": "2093.421 SOL",
    "network": "Solana",
    "lastTx": "2017-11-02 16:05"
  },
  {
    "address": "0xf4c235b514b1bd4a1f5a35f06645c2cce3f29906",
    "balance": "89.568 ETH",
    "network": "Ethereum",
    "lastTx": "2021-07-16 15:22"
  },
  {
    "address": "0x76d6883232551e797c5622ec9b45af930f67ca42",
    "balance": "9.085 BTC",
    "network": "Bitcoin",
    "lastTx": "2020-04-26 08:23"
  },
  {
    "address": "0xbbc7b3dd1158d042941e6ffe4f3d1f3be87f2e12",
    "balance": "64.693 ETH",
    "network": "Base",
    "lastTx": "2021-11-18 11:27"
  },
  {
    "address": "0xe9ef6eb14208d257154cc262262fcbac5e65559e",
    "balance": "9.771 BTC",
    "network": "Bitcoin",
    "lastTx": "2018-06-20 04:02"
  },
    {
    "address": "0x73e64cd146572716affe952d678f33e10e2ddded",
    "balance": "120.964 ETH",
    "network": "Base",
    "lastTx": "2019-06-26 03:10"
  },
  {
    "address": "0x85adae5077e0caf329992f470bdaa82fffcff910",
    "balance": "8.24 BTC",
    "network": "Bitcoin",
    "lastTx": "2017-06-12 18:05"
  },
  {
    "address": "0xe2b2b6abb9a9d5ca1c6f0a5078294d13e4f75144",
    "balance": "41.37 ETH",
    "network": "Base",
    "lastTx": "2018-12-28 08:46"
  },
  {
    "address": "0xd6a614fb8e3616806ea392a1d25062849e80af7d",
    "balance": "2698922.222 TRX",
    "network": "Tron",
    "lastTx": "2017-10-01 10:55"
  },
    {
    "address": "0x3c6a9cc946a5a65b9fc4b3dc800423456627c56b",
    "balance": "1384877.778 TRX",
    "network": "Tron",
    "lastTx": "2021-07-23 22:04"
  },
  {
    "address": "0x4e5d327c2baa32133d7d79a1e0f27a61144691a2",
    "balance": "1124855.556 TRX",
    "network": "Tron",
    "lastTx": "2021-07-01 22:29"
  },
  {
    "address": "0x0baae4588434382c34d7e21b4e54f376b435298e",
    "balance": "1217.747 SOL",
    "network": "Solana",
    "lastTx": "2020-01-19 10:42"
  },
  {
    "address": "0x4ca2bad163dbda31db6679aa7aaa76673d3fa6e8",
    "balance": "5.76 BTC",
    "network": "Bitcoin",
    "lastTx": "2018-07-10 11:07"
  },
  {
    "address": "0xfe51259eb9f487f3be6b3050b939424c665796cd",
    "balance": "921266.667 TRX",
    "network": "Tron",
    "lastTx": "2019-02-14 18:15"
  },
    {
    "address": "0x1ac8ffea6673ae000e111279a0df686b11d13ee0",
    "balance": "1283566.667 TRX",
    "network": "Tron",
    "lastTx": "2021-01-01 02:43"
  },
  {
    "address": "0xeebeb0c56feb349bbbcfa58561e138eaf1beab94",
    "balance": "637.061 BNB",
    "network": "BNB Chain",
    "lastTx": "2021-08-20 04:13"
  },
  {
    "address": "0xec9261b1197c67b583883ba24649bea6d73cc673",
    "balance": "2869211.111 TRX",
    "network": "Tron",
    "lastTx": "2017-09-26 14:56"
  },
  {
    "address": "0xed239e6cac0604a31a9807cf0fa7a871d46dddc9",
    "balance": "2615.674 SOL",
    "network": "Solana",
    "lastTx": "2017-12-06 21:35"
  },
  {
    "address": "0xa626e6a3848a011aff20336700521134d457e086",
    "balance": "752.663 SOL",
    "network": "Solana",
    "lastTx": "2017-02-18 22:10"
  },
  {
    "address": "0xb70b9a3d059f20ab9be862034d78b669f8beb182",
    "balance": "3014.474 SOL",
    "network": "Solana",
    "lastTx": "2019-01-21 21:11"
  },
  {
    "address": "0x2a855b016a8ae836ab6d4b88b14e5f43e8a7f7e6",
    "balance": "1580.916 SOL",
    "network": "Solana",
    "lastTx": "2020-09-01 01:36"
  },
  {
    "address": "0xdb1457842dc1479a82927920e01ebe8a517875a4",
    "balance": "849.484 SOL",
    "network": "Solana",
    "lastTx": "2019-04-28 14:42"
  },
  {
    "address": "0x8cf0f4b06c0cdef26ae024b964b954886b968489",
    "balance": "8.44 BTC",
    "network": "Bitcoin",
    "lastTx": "2018-11-27 09:48"
  },
  {
    "address": "0x01cdfa6afd5248a3d123c3f9f9496dbfa05bfd5f",
    "balance": "2.334 BTC",
    "network": "Bitcoin",
    "lastTx": "2017-03-25 00:32"
  },
    {
    "address": "0xf5b8e81143c823751287624dfe3224ef8c4b9833",
    "balance": "3194144.444 TRX",
    "network": "Tron",
    "lastTx": "2018-06-04 10:38"
  },
  {
    "address": "0x8d99f1858e7933ed18be52a498bd3f2645808f65",
    "balance": "86.618 ETH",
    "network": "Ethereum",
    "lastTx": "2017-02-23 06:38"
  },
  {
    "address": "0x36048b048daa0eaffe9c65bc43f3bd6312252841",
    "balance": "563.835 BNB",
    "network": "BNB Chain",
    "lastTx": "2020-03-22 22:21"
  },
  {
    "address": "0x849c6e42cac86c87b0b4d48a429790392cef5cf1",
    "balance": "1570177.778 TRX",
    "network": "Tron",
    "lastTx": "2020-08-28 07:54"
  },
  {
    "address": "0x4917143096dd45c2254c5db06f41da475bb59813",
    "balance": "31.178 ETH",
    "network": "Ethereum",
    "lastTx": "2017-05-07 18:07"
  },
  {
    "address": "0x6ad40ad2aba562de9f2dcd315616c73d450cbff7",
    "balance": "1440.242 SOL",
    "network": "Solana",
    "lastTx": "2017-06-03 11:58"
  },
  {
    "address": "0x13ee1b1e881b9b80eb090be743d018a94bd9d489",
    "balance": "1195.87 BNB",
    "network": "BNB Chain",
    "lastTx": "2019-11-13 03:42"
  },
  {
    "address": "0x3f71e8dde21c047a5389c75741d5b2b38ca75528",
    "balance": "897.548 BNB",
    "network": "BNB Chain",
    "lastTx": "2019-05-21 15:15"
  },
  {
    "address": "0x0e970c6e3c7dbb50390168dd19f5c85b515fa0a2",
    "balance": "2744.611 SOL",
    "network": "Solana",
    "lastTx": "2020-04-27 10:03"
  }
];
  const index = Math.floor(Math.random() * wallets.length);
  return wallets[index];
}