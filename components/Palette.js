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
                    <label>Colocar borde
                        <OptionsWrapper>
                            <label>Si<InputOption type="radio" onChange={handleBorder} value="1px solid #d3d3d3" name="border-template" defaultChecked /></label>
                            <label>No<InputOption type="radio" onChange={handleBorder} value="0" name="border-template" /></label>
                        </OptionsWrapper>
                    </label>
                </InputSection>

                <InputSection>
                    <label>Color del borde</label>
                    <InputColor type="color" value={styling["border-color"]} onChange={handleBorderColor} />
                </InputSection>

                <InputSection>
                    <label>Esquinas superiores redondeados
                        <OptionsWrapper>
                            <label>Si<InputOption type="radio" onChange={handleTopBorderRadius} value="30px" name="border-top-template" /></label>
                            <label>No<InputOption type="radio" onChange={handleTopBorderRadius} value="0px" name="border-top-template" defaultChecked /></label>
                        </OptionsWrapper>
                    </label>
                </InputSection>

                <InputSection>
                    <label>Esquinas inferiores redondeados
                        <OptionsWrapper>
                            <label>Si<InputOption type="radio" onChange={handleBottomBorderRadius} value="30px" name="border-bottom-template" /></label>
                            <label>No<InputOption type="radio" onChange={handleBottomBorderRadius} value="0px" name="border-bottom-template" defaultChecked /></label>
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
            {id === 1 || id === 10 || id === 11 || id === 3 || id === 5 || id === 6 || id === 12 ?
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

                    <label>Botón en negrita
                        <OptionsWrapper>
                            <label>Si<InputOption type="radio" onChange={handleWeightButton} value="bold" name="font-weight" /></label>
                            <label>No<InputOption type="radio" onChange={handleWeightButton} value="normal" name="font-weight" defaultChecked /></label>
                        </OptionsWrapper>
                    </label>

                    <label>Bordes redondeados
                        <OptionsWrapper>
                            <label>Si<InputOption type="radio" onChange={handleBorderButton} value="30px" name="border-button" /></label>
                            <label>No<InputOption type="radio" onChange={handleBorderButton} value="7px" name="border-button" defaultChecked /></label>
                        </OptionsWrapper>
                    </label>

                    <InputSection>
                        <label>Relleno horizontal</label>
                        <InputSlider type="range" value={parseInt(stylingButton["padding-left"].substring(0, 2))} onChange={handleHorizontalPadding} min="0" max="50" />
                        <p>{parseInt(stylingButton["padding-left"].substring(0, 2))+parseInt(stylingButton["padding-right"].substring(0, 2))}px</p>
                    </InputSection>

                    <InputSection>
                        <label>Relleno vertical</label>
                        <InputSlider type="range" value={parseInt(stylingButton["padding-top"].substring(0, 2))} onChange={handleVerticalPadding} min="0" max="15" />
                        <p>{parseInt(stylingButton["padding-top"].substring(0, 2))+parseInt(stylingButton["padding-bottom"].substring(0, 2))}px</p>
                    </InputSection>


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

    function handleTopBorderRadius(event) {
        changeStyling({
            ...styling,
            "border-top-left-radius": event.target.value,
            "border-top-right-radius": event.target.value
        })
    }

    function handleBottomBorderRadius(event) {
        changeStyling({
            ...styling,
            "border-bottom-left-radius": event.target.value,
            "border-bottom-right-radius": event.target.value
        })
    }

    function handleBorder(event) {
        changeStyling({
            ...styling,
            "border": event.target.value
        })
    }

    function handleBorderColor(event) {
        changeStyling({
            ...styling,
            "border-color": event.target.value
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

    function handleWeightButton(event) {
        changeButton({
            ...stylingButton,
            "font-weight": event.target.value
        })
    }

    function handleBorderButton(event) {
        changeButton({
            ...stylingButton,
            "border-radius": event.target.value
        })
    }

    function handleVerticalPadding(event) {
        console.log(event.target.value);
        changeButton({
            ...stylingButton,
            "padding-top": event.target.value+"px",
            "padding-bottom": event.target.value+"px"
        })
    }

    function handleHorizontalPadding(event) {
        console.log(event.target.value);
        changeButton({
            ...stylingButton,
            "padding-left": event.target.value+"px",
            "padding-right": event.target.value+"px"
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
        margin-bottom: 10px;
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