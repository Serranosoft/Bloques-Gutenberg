import React from "react";
import styled from '@emotion/styled';
import { db } from "../components/Firebase/config"
import Templates from "../resources/Templates"
import StarRatingComponent from 'react-star-rating-component';
import Link from "next/link";
import Head from "next/head"

export const getStaticProps = async () => {
    let data = [];
    try {
        let templates = await db.ref("templates").once("value").then((snapshot) => {
            let snap = snapshot.val()
            const snapValues = Object.keys(snap).map(key => ({
                ...snap[key]
            }))

            let templates = [];
            for (let i = 0; i < snapValues.length; i++) {
                if (snapValues[i].hasOwnProperty("rating")) {
                    templates.push({
                        "id": snapValues[i].templateId,
                        "rate": Object.keys(snapValues[i].rating).map(key => ({
                            ...snapValues[i].rating[key]
                        }))
                    })
                }
            }
            return templates
        })

        for (let el of templates) {
            for (let rate of el.rate) {
                await db.ref(`users/${rate.uid}`).child("nameInput").once("value").then((snapshot => {
                    Templates.map(template => {
                        if(template.id === el.id) {
                            data.push({ 
                                "template": template.name,
                                "username": snapshot.val(), 
                                "rate": rate.rate,
                            })
                        }
                    })
                }))
            }
        }

    } catch (error) {
        console.log(error);
        return error
    }

    return {
        props: {
            data
        }
    }
}

function estadisticas(props) {

    let users = [...props.data].reverse();

    return (
        <>
        <Head>
            <title>Estadísticas de los bloques - Bloques Gutenberg</title>
            <meta name="description" content="Diseña y personaliza tu bloque gutenberg: tabla o caja para tu nicho SEO de Amazon Afiliados o Adsense en Wordpress" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <LandingTitle>Estadísticas de los bloques mas
        <span style={{
          display: "block",
          color: "#34d399",
          textAlign: "center"
        }}>usados por los usuarios</span>
        </LandingTitle>
        <LandingSubtitle>
          Analiza cuanto han puntuado los diferentes usuarios de la plataforma para saber que bloques son los mas usados.
        </LandingSubtitle>
            <ContributorsGrid>
                {users.map(el => {
                    return (
                        <Contributor>
                            <span>{el.username}</span>
                            <StarRatingComponent
                                name={"rate"}
                                value={el.rate}
                                editing={false}
                            />
                            <Link href={`${el.template}`}>{el.template}</Link>
                        </Contributor>
                    )
                })}
            </ContributorsGrid>

        </>
    )

}

export default estadisticas;

const LandingTitle = styled.h1`
    padding-top: 36px;
    font-size: 60px;
    font-family: 'Texturina', serif;
    color: white;
    line-height: 1.1;
    word-spacing: -5px;
    text-align: center;
    @media(max-width: 768px) {
        padding: 16px 12px 8px 12px;
        font-size: 29px;
        line-height: 1.3;
        word-spacing: 1px;
    }
`

const LandingSubtitle = styled.p`
    width: 650px;
    margin: 16px auto 8px auto;
    font-size: 20px;
    text-align: center;
    color: #d6d6d6;
    @media(max-width: 768px) {
        width: 100%;
        margin: 0px 0px;
        font-size: 16.5px;
    }
`

const ContributorsGrid = styled.section`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 16px 24px;
    margin: 32px 0;
    background-color: #151b24;
    border-radius: 15px;
`

const Contributor = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 8px;
    font-size: 16px;
    color: lightgray;
    & > a {
        margin: 8px 0;
        color: lightgray;
    }

`

    /* console.log(props); */
    /*  const [BestTemplates, getBestTemplates] = useState("")
     const [BestTemplatesWithName, handleTemplates] = useState("")
 
     let templates = [];
     function getName() {
         let aux = 0;
         let i = 0;
         while (aux < 3) {
             if (Templates[i].id === BestTemplates[aux].id) {
                 templates.push({ "id": Templates[i].id, "rating": BestTemplates[aux].rating, "name": Templates[i].name })
                 aux++;
                 i = 0;
             } else {
                 i++
             }
         }
         handleTemplates(templates);
     }
 
     useEffect(() => {
         getBestTemplatesRating(getBestTemplates);
         
     }, [])
 
     useEffect(() => {
         if (BestTemplates !== "") {
             getName()
         }
     }, [BestTemplates]) */

    /* useEffect(() => {
       getAllTemplatesWithRatings();
       
   }, []) */