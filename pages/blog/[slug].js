import React, { useEffect } from "react";
import Head from 'next/head'
import styled from '@emotion/styled'
import { getPostBySlug } from '../../lib/api'
import { getAllSlugs } from '../../lib/api'
import Link from "next/link";


export async function getStaticProps({ params }) {
    const data = await getPostBySlug("blog", params.slug)

    return {
        props: {
            data
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllSlugs();

    return {
        paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`),
        fallback: false,
    }
}

function Article({ data }) {
    return (
        <>
            <Head>
                <title>Personaliza tu bloque gutenberg | Bloques Gutenberg</title>
                <meta name="description" content="Diseña y personaliza tu bloque gutenberg: tabla o caja para tu nicho SEO de Amazon Afiliados o Adsense en Wordpress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ArticleWrapper>
                <Title>{data.title}</Title>
                <Profile>
                    <Avatar src={data.author.node.avatar.url}/>
                    <Author>{data.author.node.name} - fundador de <Link href="/">bloques-gutenberg.com</Link></Author>
                </Profile>
                </ArticleWrapper>
                <FeaturedImg src={data.featuredImage.node.sourceUrl} />
                <ArticleWrapper>
                <Content dangerouslySetInnerHTML={{ __html: data.content}} />
            </ArticleWrapper>
        </>
    )
}

export default Article;

const ArticleWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 55%;
    margin-top: 40px;
    @media(max-width: 768px) {
        width: 95%;
    }
`

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 8px;
    word-spacing: -3.0px;
    letter-spacing: -0.8px;
    @media(max-width: 768px) {
        font-size: 32px;
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`

const Avatar = styled.img`
    width: 45px;
    border-radius: 50%;
`

const Author = styled.span`
    font-size: 14px;
    color: lightgray;
    margin-left: 12px;
    & > a {
        color: #34d399;
    }
`

const FeaturedImg = styled.img`
    width: 62%;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 95%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #e3e3e3;
    font-size: 19px;
    line-height: 1.7;
    margin-top: 32px;
    letter-spacing: -0.4px;
    & > h2, h3 {
        margin: 16px 0;
    }
    & > p {
        margin-bottom: 24px;
    }
    & > p a {
        color: #34d399;
    }
    & > figure {
        margin: 24px auto;
        justify-self: center;
        align-self: center;
    }
    & > figure img {
        width: 100%;
        margin: 0 auto;
        height: 100%;

    }

    & > .wp-block-image {
        margin: 8px auto;
    }

    & > .wp-block-image .size-medium img, .wp-block-image .size-full img {
        width: 100%;
        height: 100%;
    }

    & > .template1, .template1 .wp-block-buttons .wp-block-button a {
        color: black;
        text-decoration: none;
    }

    @media(max-width: 768px) {
        font-size: 16.5px;
        & > h2 {
            font-size: 26px;
            line-height: 1.2;
        }
        & > h2 {
            font-size: 20px;
            line-height: 1.2;
        }
    }
`
