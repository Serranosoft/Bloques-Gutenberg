import React, { useEffect } from "react";
import styled from '@emotion/styled'
import Link from "next/link";
import Head from 'next/head'
import { getAllPosts } from '../lib/api'

export async function getStaticProps() {
    const data = await getAllPosts();
    return {
        props: { data }
    }
}

function Blog({ data }) {
    const posts = data.edges;
    return (
        <>
            <Head>
                <title>TODA la lista de BLOQUES y DISEÑOS para nichos de Adsense y Amazon para Wordpress</title>
                <meta name="description" content="Crea bloques gutenberg para wordpress en nichos de SEO en Adsense o Amazon sin saber programar y sin plugins. SEO amistoso, rápido y adaptables a móvil." />
            </Head>
            <LandingTitle>Aprende a mejorar tus  <span style={{
                color: "#34d399",
                textAlign: "center"
            }}>webs y nichos</span></LandingTitle>
            <BlogWrapper>
                {posts.map((el) => {
                    return (
                        <Link href={`/blog/${el.node.slug}`}>
                            <BlogItem key="">
                                <BlogImage src={el.node.featuredImage.node.sourceUrl} />
                                <BlogTitle>{el.node.title}</BlogTitle>
                            </BlogItem>
                        </Link>
                    )
                })}
            </BlogWrapper>
        </>
    )
}

export default Blog;

const LandingTitle = styled.h1`
    margin: 24px 0;
    font-size: 52px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -5px;
    @media(max-width: 768px) {
        padding: 36px 8px 8px 8px;
        font-size: 33px;
        line-height: 1.3;
        word-spacing: 1px;
        text-align: center;
    }
`

const BlogWrapper = styled.section`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 35px;
    margin: 24px 0;
    @media(max-width: 768px) {
        width: 95%;
        margin: 24px auto;
    }
`

const BlogItem = styled.div`
    width: 100%;
    padding: 8px;
    cursor: pointer;
    transition: 1s;
    &:hover {
        transform: scale(0.95);
    }
`

const BlogImage = styled.img`
    width: 100%;
    height: 230px;
    max-height: 230px;
`

const BlogTitle = styled.h2`
    margin: 16px 0;
    font-size: 20px;
    word-spacing: -0.7px;
    letter-spacing: -0.8px;
    @media(max-width: 768px) {
        text-align: center;
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