import React from "react";
import styled from "@emotion/styled"

function Palette({ styling, changeStyling }) {

    console.log(styling["letter-spacing"]);
    function handleBgColor(event) {
        changeStyling({
            ...styling,
            background: event.target.value
        })
    }

    function handleColor(event) {
        changeStyling({
            ...styling,
            color: event.target.value
        })
    }

    function handleLetterSpacing(event) {
        changeStyling({
            ...styling,
            "letter-spacing": event.target.value + "px"
        })
    }

    function handleWordSpacing(event) {
        changeStyling({
            ...styling,
            "word-spacing": event.target.value + "px"
        })
    }

    function handleBorderRadius(event) {
        console.log(event.target.value);
        changeStyling({
            ...styling,
            "border-radius": event.target.value
        })
    }

    return (
        <Form>
            <PaletteSection>
                <SectionTitle>PLANTILLA</SectionTitle>
                <Label>Color del fondo
                        <InputColor type="color" value={styling.background} onChange={handleBgColor} />
                </Label>
                <Label>Bordes redondeados
                    
                    <InputOption type="radio" onChange={handleBorderRadius} value="30px" name="border-radius" />
                    <label>Si</label>
                    <InputOption type="radio" onChange={handleBorderRadius} value="0px" name="border-radius" />
                    <label>No</label>
                </Label>
            </PaletteSection>
            <PaletteSection>
                <SectionTitle>CONTENIDO</SectionTitle>
                <Label>Color de la letra
                        <InputColor type="color" value={styling.color} onChange={handleColor} />
                </Label>
                <Label>Espacio entre las letras
                        <InputSlider type="range" value={styling["letter-spacing"].substring(0, 1)} onChange={handleLetterSpacing} min="0" max="8" />
                    <p>{styling['letter-spacing']}</p>
                </Label>
                <Label>Espacio entre las palabras
                        <InputSlider type="range" value={styling["word-spacing"].substring(0, 1)} onChange={handleWordSpacing} min="0" max="8" />
                    <p>{styling['word-spacing']}</p>
                </Label>
            </PaletteSection>

        </Form>
    )
}

export default Palette

const Form = styled.form`
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-template-rows: 1fr;
    text-align: center;
    gap: 10px;
    margin: 16px 0;
`

const PaletteSection = styled.div`
    border: 1px solid lightgray;
    background-color: rgba(255,255,255,0.02)
`

const SectionTitle = styled.p`
    margin-bottom: 16px;
    font-family: 'Texturina', serif;
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    color: #34d399;

`
const Label = styled.label`
    display: inline;
`

const OptionsWrapper = styled.div`
    width: 100%;
`

const InputText = styled.input`
    display: block
    width: 100%;
`

const InputColor = styled.input`
    display: block;
    width: 45%;
    height: 40px;
    margin: 8px auto;
`

const InputOption = styled.input`
    margin: 0 auto;
    display: block;
`

const InputSlider = styled.input`
    display: block;
    margin: 10px auto;
    -webkit-appearance: none;
    height: 7px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #34d399;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #34d399;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #34d399;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }
`