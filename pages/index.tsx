import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr';

import Tile from '@sm/components/tile'
import Layout from '@sm/components/layout'
import styles from '@sm/styles/home.module.scss'
import { Pet } from 'types/pet.types';


const Home: NextPage = () => {

  function handleClick(event: any){
    //console.log(event.target.name);
  }
  const fetcher = async (url:string) => await fetch(url).then((res) => res.json())
  
  console.log(process.env.PETS_URL)

  const { data, error } = useSWR('http://localhost:50001/pets', fetcher)

  // if(error){
  //   console.error(error);
  // }
  
  return (
    <Layout home>
      <section>
        <section className={styles.banner}>
          <div className="page">
            {data && data.map((pet:Pet) => (
              <Tile key={pet.id} height={250} width={250} backgroundImage={`/images/dogs/${pet.name}.jpeg`} name={pet.name}></Tile>
            ))}
          </div>
        </section>
        <section className={styles.cta}>
          <div className="page">
            <Link href="/adopt">
              <a className={styles.action}><i className="fa-solid fa-paw"></i> Apply to Adopt</a>
            </Link>
            <Link href="/foster">
              <a className={styles.action}><i className="fa-solid fa-person-shelter"></i> Apply to Foster</a>
            </Link>
            <Link href="/donate">
              <a className={styles.action}><i className="fa-solid fa-piggy-bank"></i> Donate Now</a>
            </Link>
          </div>
        </section>
        <div className="page">
          <h1>We help shelter pets find their fur-ever home!</h1>
          <p>When you find yourself in the shelter, there is no reason to be scared. Shelter Me is an adoption and fostering matching site for dogs and cats. Shelter pets can find homes and fosters of their own. All for free!</p>
          <p>ShelterMe is a digital home for pets in need. We give shelter pets visibility and voice to help them find homes faster. Our online community brings people together who want to adopt or foster, but also those who want to give back by donating money or supplies, helping out at events, or even joining us for a foster vacation.</p>
          <p>ShelterMe is a collaborative effort between animal shelters, fosters, rescues and pet lovers who believe that every pet deserves a forever home. People can search for available pets on the website and email shelters for more information about any individual pet. Pet lovers support ShelterMe by donating to the shelter or fostering an animal in need.</p>
          <p>If you love animals, and want to help find a home for a shelter pet, then this is the site for you. We can even schedule visits with potential adoptive parents. If it turns out you are unable to adopt, we can find someone who can. What have you got to lose? Check us out!</p>
        </div>
      </section>
    </Layout>
  )
}

export default Home