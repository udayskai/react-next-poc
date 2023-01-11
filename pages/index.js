import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] })
import {
  useQuery,
} from "@tanstack/react-query";


const headerConfig = {
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    // NOTE : ADD your key here 
    "x-csrf-token": "eeo5JQf05AslNo1Uqpl6SJxjkhQLV6B6KUnYva/EbCU8Z4dlCPNZU4pShfNUAZq52s1n8LcJ8zbJNj+T5LWVog==",
  },
  referrerPolicy: "strict-origin-when-cross-origin",
  body: null,
  method: "GET",
  mode: "cors",
  credentials: "include",
 }

 const getCount = () =>
 axios.get('/dashboard/contributions_count.json', {}, {
  headers: headerConfig
})



export default function Home() {
  const { isLoading, data } = useQuery(
    {
      queryKey: ["getCount"],
      queryFn: getCount,
    }
  );
  
  return (
    <>
      <Head>
        <title>React-HN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>
            Hownow total contributions :  
            {isLoading &&   "Loading" }
            {data?.data?.total_contributions }
          </h1>
        </div>
      </main>
    </>
  )
}
