import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import db from '../firebase';

const Detail = (props) => {

    const { id } = useParams();
    const [detailData,setDetailData] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) =>{
            if (doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log("no such document exixsts in firebase");
            }
        }).catch((error) => {
            console.log("Error getting Document:",error)
        })
    }, [id]);

    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/img/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/img/play-icon-white.png" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        +
                    </AddList>
                    <GroupWatch>
                        <img src="/img/group-icon.png" />
                    </GroupWatch>
                </Controls>                 
                <SubTitle>
                    {detailData.subTitle}
                </SubTitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
    )
};

const Container = styled.div`
position:relative;
min-height:calc(100vh - 250px);
overflow-x:hidden;
cursor:default;
display:block;
top:72px;
padding:0 calc(3.5vw + 5px);

`

const Background = styled.div`
left:0;
opacity:0.65;
position:fixed;
right:0;
top:0;
z-index:-1;

img {
    position: absolute;
    top: 68px;
    width:100vw;
    height:100vh;
/* 
    @media (max-width:768px) {
        width:initial;
    } */
}
`

const ImageTitle = styled.div`
align-items:flex-end;
display:flex;
-webkit-box-pack:start;
justify-content:flex-start;
margin:0 auto;
margin-top:4px;
min-height:170px;
padding-bottom:16px;
width:100%;

img {
    max-width:600px;
    min-width:200px;
    width:35vw;
}
`

const ContentMeta = styled.div`
max-width:874px;
`

const Controls = styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
margin:24px 0;
min-height:56px;
`

const Player = styled.button`
border-radius:4px;
border:none;
font-size:15px;
margin:0 22px 0 0;
padding:0 24px;
height:56px;
display:flex;
align-items:center;
text-transform:uppercase;
cursor:pointer;
justify-content:center;
letter-spacing:1.8px;
background: rgb(249,249,249);
color:rgb(0,0,0);

img {
    width:32px;
}

&:hover {
    background:rgb(198,198,198);
}

@media (max-width:768px) {
    height:45px;
    padding:0 12px;
    font-size:12px;
    margin:0 10px 0 0;

    img {
        width:25px;
    }
}
`

const Trailer = styled(Player)`
background:rgba(0, 0, 0, 0.3);
border:1px solid rgb(249, 249, 249);
color:rgb(249, 249, 249);
`

const AddList = styled.div`
margin-right:16px;
height:44px;
width:44px;
display:flex;
align-items:center;
justify-content:center;
background-color:rgba(0, 0, 0 ,0.6);
border-radius:50%;
border:2px solid white;
cursor:pointer;
font-size:30px;
`

const GroupWatch = styled(AddList)`
`

const SubTitle = styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;

@media (max-width:768px){
    font-size:13px;
}
`

const Description = styled.div`
line-height:1.4;
font-size:20px;
padding:16px 0;
color:rgb(249,249,249);

@media (max-width:768px) {
    font-size:16px;
}
`

export default Detail;