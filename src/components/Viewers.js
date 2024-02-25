import styled from 'styled-components';

const Viewers = (props) => {
    return (
        <Container>
            <Wrap>
                <img src="/img/viewers-disney.png" alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vid/vid-disney.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/img/viewers-pixar.png" alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vid/vid-pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/img/viewers-marvel.png" alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vid/vid-marvel.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/img/viewers-starwars.png" alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vid/vid-star-wars.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/img/viewers-national.png" alt='' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/vid/vid-national-geographic.mp4" type="video/mp4"/>
                </video>
            </Wrap>
        </Container>
    )
};

const Container = styled.div`
display:grid;
margin-top:30px;
padding:30px 0 26px;
gap:25px;
grid-template-columns: repeat(5, minmax(0, 1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}
`
const Wrap = styled.div`
padding-top:56.25%;
border-radius:10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow:hidden;
position:relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border:3px solid rgba(249,249,249,0.1);

img{
    inset:0;
    display:block;
    height:100%;
    object-fit:cover;
    opacity:1;
    position:absolute;
    transition:opacity 500ms ease-in-out 0s;
    width:100%;
    z-index:1;
    top:0;
}

video{
    width:100%;
    height:100%;
    position:absolute;
    top:0px;
    object-fit:cover;
    opacity:0;
    z-index:0;
}

&:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color:rgba(249,249,249,0.8);

    video {
        opacity:1;
    }
}

`

export default Viewers;