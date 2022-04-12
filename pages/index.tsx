import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tile from '../components/tile'
import Layout, {siteTitle} from '../components/layout'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <Layout home>
      <section>
        <section className={styles.banner}>
          <div className="page">
          <Tile height={250} width={250} backgroundImage="/images/dogs/chloe.jpeg" name="Chlöe"></Tile>
          <Tile height={250} width={250} backgroundImage="/images/dogs/zack.jpeg" name="Zack"></Tile>
          <Tile height={250} width={250} backgroundImage="/images/dogs/joey.jpeg" name="Joey"></Tile>
          <Tile height={250} width={250} backgroundImage="/images/dogs/charisma.jpeg" name="Charisma"></Tile>
          <Tile height={250} width={250} backgroundImage="/images/dogs/bruce.jpeg" name="Bruce"></Tile>
          <Tile height={250} width={250} backgroundImage="/images/dogs/myrtle.jpeg" name="Myrtle"></Tile>
          <Tile height={250} width={250} backgroundImage="/images/dogs/happy.jpeg" name="Happy"></Tile>
          </div>
        </section>
        <div className="page">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit, arcu vitae tincidunt dictum, erat arcu eleifend lectus, non maximus lectus lorem sed mi. Morbi erat justo, varius ut lorem non, dictum ultrices sem. Morbi pulvinar felis a lorem pharetra bibendum. Cras urna turpis, sagittis vitae arcu ut, rhoncus placerat est. Curabitur finibus sagittis ipsum, nec vehicula ex scelerisque lobortis. Duis at pretium urna, eu rhoncus odio. Donec nec nisl tempor, lobortis risus et, pulvinar nibh. Proin varius elit at dolor mollis, at ullamcorper orci interdum.
          </p>
          <p>
            Phasellus auctor massa ligula, ut ullamcorper ipsum auctor at. Nunc tincidunt, neque vitae ornare faucibus, erat nisi consectetur tortor, ullamcorper ultricies orci neque rhoncus justo. Duis porta pulvinar justo, quis semper quam facilisis quis. Proin dapibus leo justo, ut finibus odio finibus eu. Curabitur id justo nec nulla convallis viverra. Aliquam porttitor leo at leo laoreet maximus. Ut fringilla tempor nulla, nec egestas ante sollicitudin vitae. Quisque lobortis tempor leo. Sed vestibulum luctus ipsum, aliquet tempor eros pellentesque in. Phasellus nulla lorem, placerat sed ante at, ultricies aliquam odio. Integer condimentum diam sed luctus molestie. Nunc congue nunc at lectus ullamcorper, in efficitur nisi euismod. Integer magna lectus, volutpat eget tortor quis, pretium rutrum risus. Maecenas ornare, enim ut scelerisque sagittis, purus augue sagittis eros, nec scelerisque enim libero in neque. Integer et lorem nec lorem ornare sodales sed quis ligula. Praesent tincidunt laoreet augue, et dictum erat sodales et.
          </p>
          <p>
            Etiam pretium euismod turpis, sed pellentesque metus mollis eu. Aliquam in dolor risus. Quisque pellentesque turpis dignissim, tincidunt ligula non, dapibus justo. Nullam in tortor quis turpis faucibus mollis nec molestie urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum efficitur risus, id gravida odio sollicitudin nec. Curabitur laoreet facilisis lectus, eu eleifend ante vulputate vitae. Curabitur sed iaculis quam. Suspendisse ornare vestibulum tellus vel pharetra. Duis vitae tincidunt ipsum. Aliquam vel tempor lorem. Ut efficitur felis magna. Mauris erat sapien, hendrerit vitae felis nec, porttitor pellentesque felis.
          </p>
          <p>
            Vivamus ac euismod magna. Vestibulum eget ullamcorper eros. Ut efficitur ipsum a sollicitudin commodo. Duis mollis tellus at neque faucibus, ut mollis neque consectetur. Suspendisse potenti. Nulla et ante ut risus convallis ornare non at lorem. Phasellus at tincidunt metus. Duis hendrerit et augue et congue. Nullam egestas volutpat nulla a tempus. Duis ut aliquam nulla. Mauris sit amet ante eget mi malesuada egestas. Fusce euismod aliquam urna eu facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam erat mauris, cursus et consequat luctus, bibendum in diam. Etiam non odio congue, vehicula lectus eu, hendrerit nisi.
          </p>
          {/* <p>
            Etiam pretium euismod turpis, sed pellentesque metus mollis eu. Aliquam in dolor risus. Quisque pellentesque turpis dignissim, tincidunt ligula non, dapibus justo. Nullam in tortor quis turpis faucibus mollis nec molestie urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum efficitur risus, id gravida odio sollicitudin nec. Curabitur laoreet facilisis lectus, eu eleifend ante vulputate vitae. Curabitur sed iaculis quam. Suspendisse ornare vestibulum tellus vel pharetra. Duis vitae tincidunt ipsum. Aliquam vel tempor lorem. Ut efficitur felis magna. Mauris erat sapien, hendrerit vitae felis nec, porttitor pellentesque felis.
          </p>
          <p>
            Vivamus ac euismod magna. Vestibulum eget ullamcorper eros. Ut efficitur ipsum a sollicitudin commodo. Duis mollis tellus at neque faucibus, ut mollis neque consectetur. Suspendisse potenti. Nulla et ante ut risus convallis ornare non at lorem. Phasellus at tincidunt metus. Duis hendrerit et augue et congue. Nullam egestas volutpat nulla a tempus. Duis ut aliquam nulla. Mauris sit amet ante eget mi malesuada egestas. Fusce euismod aliquam urna eu facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam erat mauris, cursus et consequat luctus, bibendum in diam. Etiam non odio congue, vehicula lectus eu, hendrerit nisi.
          </p> */}
        </div>
      </section>
    </Layout>
  )
}

export default Home