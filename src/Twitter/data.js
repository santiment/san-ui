import React from 'react'
import Sheldon from './images/SheldonStack.jpg'
import MennoPP from './images/MennoPP.jpg'
import crypto_birb from './images/crypto_birb.jpg'
import Merp from './images/0xMerp.jpg'
import ortiercapital from './images/ortiercapital.jpg'
import julianhosp from './images/julianhosp.jpg'
import Slivinschi from './images/Slivinschi.jpg'
import Ameer from './images/AmeerRosic.jpg'
import Cryptonacci from './images/XCryptonacciX.jpg'
import Coachkcrypto from './images/Coachkcrypto.jpg'
import Ahab from './images/Ahab_1337.jpg'
import Johninvesting from './images/Johninvesting.jpg'

export const tweets = [
  {
    id: '1334329471491592197',
    handle: 'SheldonStack',
    avatar: Sheldon,
    displayName: 'Sheldon “3,3” Stack',
    content: (
      <blockquote>
        <p>
          Probed your platform, interesting metrics offering some very nuanced
          insights. Between the on-chain analysis, development activity and
          macro view - on the alt side, bullish on (@bancor)
          <a href='https://twitter.com/search?q=%24bnt&src=cashtag_click'>
            $bnt
          </a>{' '}
          <a href='https://twitter.com/hashtag/DeFi?src=hash&amp;ref_src=twsrc%5Etfw'>
            #DeFi
          </a>{' '}
          <a href='https://twitter.com/hashtag/Analytics?src=hash&amp;ref_src=twsrc%5Etfw'>
            #Analytics
          </a>{' '}
          Kudus (@santimentfeed)
          <span role='img' aria-label='Thumbs up'>
            👍
          </span>
        </p>
      </blockquote>
    )
  },
  {
    id: '1326784275539255298',
    handle: 'MennoPP',
    avatar: MennoPP,
    displayName: 'Menno Pietersen',
    content: <p>That is some fantastic data.</p>
  },
  {
    id: '1325316475117207552',
    handle: 'Coachkcrypto',
    avatar: Coachkcrypto,
    displayName: 'Coach K (BTC Survivor since 2013)',
    content: (
      <p>
        Love this kinds data now if you could make an indicator that showed it
        all aggregated in a simple form that would be super cool
      </p>
    )
  },
  {
    id: '1322545215576690697',
    handle: 'crypto_birb',
    avatar: crypto_birb,
    displayName: 'CRYPTO₿IRB',
    content: (
      <p>
        Great insight
        <span role='img' aria-label='eyes'>
          👀
        </span>
      </p>
    )
  },
  {
    id: '1389019263902445571',
    handle: 'Johninvesting',
    avatar: Johninvesting,
    displayName: 'John 🇦🇺🐊',
    content: (
      <p>
        Signed up to the free trial
        <a href='https://twitter.com/santimentfeed?ref_src=twsrc%5Etfw'>
          @santimentfeed
        </a>
        <span>Love the interface so far.</span>
        <a href='https://twitter.com/search?q=%24ETH&amp;src=ctag&amp;ref_src=twsrc%5Etfw'>
          $ETH
        </a>
        <span>
          supply on exchanges continues to go down while price is still heading
          to $3,000.
        </span>
        <a href='https://twitter.com/hashtag/ethererum?src=hash&amp;ref_src=twsrc%5Etfw'>
          #ethererum
        </a>
      </p>
    )
  },
  {
    id: '1320914030265921536',
    handle: '0xMerp',
    avatar: Merp,
    displayName: 'Merp(9,9)',
    content: <p>great content as always</p>
  },
  {
    id: '1320905514931412998',
    handle: 'ortiercapital',
    avatar: ortiercapital,
    displayName: 'Ortier Capital',
    content: (
      <p>
        amazing ! keeep up the{' '}
        <span aria-label='fire' role='img'>
          🔥🔥🔥
        </span>
        post
      </p>
    )
  },
  {
    id: '1326767360733286405',
    handle: 'julianhosp',
    avatar: julianhosp,
    displayName: 'Dr. Julian Hosp',
    content: <p>great work!</p>
  },
  {
    id: '1329226946656530436',
    handle: 'ASlivinschi',
    avatar: Slivinschi,
    displayName: 'Alexei Slivinschi',
    content: (
      <p>
        Great analysis. I like it as you bring facts on the table rather than as
        all the others on this platform shouting 100k continually. Thanks you!
      </p>
    )
  },
  {
    id: '1328852470559338499',
    handle: 'AmeerRosic',
    avatar: Ameer,
    displayName: 'Ameer Rosic',
    content: (
      <p>
        Great insights.
        <br />
        <br />
        Social chat is heating up for bitcoin
      </p>
    )
  },
  {
    id: '1327735651895304192',
    handle: 'XCryptonacciX',
    avatar: Cryptonacci,
    displayName: 'CryptoNacci',
    content: (
      <p>
        I love these charts man!
        <a href='https://twitter.com/hashtag/btc?src=hash&amp;ref_src=twsrc%5Etfw'>
          #btc
        </a>{' '}
        <a href='https://twitter.com/hashtag/bitcoin?src=hash&amp;ref_src=twsrc%5Etfw'>
          #bitcoin
        </a>{' '}
        <a href='https://twitter.com/hashtag/crypto?src=hash&amp;ref_src=twsrc%5Etfw'>
          #crypto
        </a>{' '}
        <a href='https://t.co/M31sVoFOMA'>https://t.co/M31sVoFOMA</a>
      </p>
    )
  },
  {
    id: '1383428248525103111',
    handle: 'Ahab_1337',
    avatar: Ahab,
    displayName: 'Ahab',
    content: (
      <p>
        Love the tools you provide. The on chain metrics were instrumental at
        turning 850usd to 39k usd in only 4 weeks. Thanks for your work!
      </p>
    )
  }
]

//deleted or blocked tweets

// <blockquote className='twitter-tweet' data-conversation='none'>
//   <p lang='en' dir='ltr'>
//     Great analysis; thank you for the info!
//   </p>
//   &mdash; Darius Dale (@HedgeyeDDale){' '}
//   <a href='https://twitter.com/HedgeyeDDale/status/1329189430335328261?ref_src=twsrc%5Etfw'>
//     November 18, 2020
//   </a>
// </blockquote>,
// {
//   id: "1323579037667725319",
//   avatarSrc: "",
//   handle: "bitcryptid",
//   displayName: "Artemio",
//   content: (
//     <p>
//       Great stuff.
//     </p>
//   )
// },
