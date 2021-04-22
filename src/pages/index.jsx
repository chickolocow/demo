import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Features from '@solid-ui-blocks/Features/Block06'
import FeatureTabOne from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import FeatureTabTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block06'
import FeatureTabThree from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Pricing from '@solid-ui-blocks/Pricing/Block01'
import WhyChooseUs from '@solid-ui-blocks/Features/Block04'
import Strategies from '@solid-ui-blocks/Stats/Block01'
import OurTeams from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import Testimonials from '@solid-ui-blocks/Testimonials/Block01'
import Companies from '@solid-ui-blocks/Companies/Block01'
import About from '@solid-ui-blocks/Companies/Block01'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from './_theme'
import styles from './_index.styles'

const IndexPage = props => {
  const { allBlockContent } = useStaticQuery(query)
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
        <Divider space='5' />
        <Divider space='5' />
        <Divider space='5' />
      </Container>
      <OurTeams content={content['our-teams']} />
      <Divider space='5' />
      <Divider space='5' />
      <Features content={content['products']} />
      <Container variant='wide' sx={styles.featuresContainer}>
        <FeatureTabOne content={content['product-tab-one']} reverse />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabTwo content={content['product-tab-two']} />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabThree content={content['product-tab-three']} reverse />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <About content={content['about']}/>
      <Divider space='5' />
      <Strategies content={content['get-started']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

const query = graphql`
  query sirruIndexBlockContent {
    allBlockContent(filter: { page: { in: ["site/index", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
