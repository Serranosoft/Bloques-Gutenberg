import React from "react";
import styled from "@emotion/styled"

function Palette({ id, styling, changeStyling, changeButton, stylingButton }) {

    return (

        <Form>
            <PaletteSection>
                <SectionTitle>PLANTILLA</SectionTitle>

                <InputSection>
                    <label>Color del fondo</label>
                    <InputColor type="color" value={styling.background} onChange={handleBgColor} />
                </InputSection>

                <InputSection>
                    <label>Bordes redondeados
                        <OptionsWrapper>
                            <label>Si<InputOption type="radio" onChange={handleBorderRadius} value="30px" name="border-template" /></label>
                            <label>No<InputOption type="radio" onChange={handleBorderRadius} value="0px" name="border-template" defaultChecked /></label>
                        </OptionsWrapper>
                    </label>
                </InputSection>

            </PaletteSection>
            <PaletteSection>
                <SectionTitle>CONTENIDO</SectionTitle>

                <InputSection>
                    <label>Color de la letra</label>
                    <InputColor type="color" value={styling.color} onChange={handleColor} />
                </InputSection>

                <InputSection>
                    <label>Espacio entre las letras</label>
                    <InputSlider type="range" value={styling["letter-spacing"].substring(0, 1)} onChange={handleLetterSpacing} min="0" max="8" />
                    <p>{styling['letter-spacing']}</p>
                </InputSection>

                <InputSection>
                    <label>Espacio entre las palabras</label>
                    <InputSlider type="range" value={styling["word-spacing"].substring(0, 1)} onChange={handleWordSpacing} min="0" max="8" />
                    <p>{styling['word-spacing']}</p>
                </InputSection>

            </PaletteSection>
            {id === 1 || id === 10 || id === 11 || id === 3 || id === 5 ?
                <PaletteSection>
                    <SectionTitle>BOTÓN</SectionTitle>

                    <InputSection>
                        <label>Color del botón</label>
                        <InputColor type="color" value={stylingButton.background} onChange={handleBgButtonColor} />
                    </InputSection>

                    <InputSection>
                        <label>Color de la letra</label>
                        <InputColor type="color" value={stylingButton.color} onChange={handleButtonColor} />
                    </InputSection>

                    <label>Bordes redondeados
                        <OptionsWrapper>
                            <label>Si<InputOption type="radio" onChange={handleBorderButton} value="30px" name="border-button" /></label>
                            <label>No<InputOption type="radio" onChange={handleBorderButton} value="7px" name="border-button" defaultChecked /></label>
                        </OptionsWrapper>
                    </label>

                </PaletteSection> : ""
            }

        </Form>

    )

    /* TEMPLATE FUNCTIONS */
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
        changeStyling({
            ...styling,
            "border-radius": event.target.value
        })
    }

    /* BUTTON FUNCTIONS */
    function handleBgButtonColor(event) {
        changeButton({
            ...stylingButton,
            background: event.target.value
        })
    }

    function handleButtonColor(event) {
        changeButton({
            ...stylingButton,
            color: event.target.value
        })
    }

    function handleBorderButton(event) {
        changeButton({
            ...stylingButton,
            "border-radius": event.target.value
        })
    }
}


export default Palette

const Form = styled.section`
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-template-rows: 1fr;
    text-align: center;
    gap: 10px;
    margin: 16px 0;
`

const PaletteSection = styled.div`
    display: grid;
    justify-content: center;
    align-content: start;
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

const InputSection = styled.div`
    width: 100%;
    text-align: center;
    margin: 8px auto;
`

const OptionsWrapper = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    & > label {
        display: flex;
        align-items: center;
        font-size: 16.5px;
        cursor: pointer;
    }
`

const InputColor = styled.input`
    display: block;
    height: 40px;
    margin: 8px auto;
`

const InputOption = styled.input`
	width: 20px;
	height: 20px;
    margin: 8px 5px;
    cursor: pointer;
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