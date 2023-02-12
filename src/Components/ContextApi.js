import React from 'react';
import { createContext, useState } from "react";

export const store = createContext();

const ContextApi = (props) => {

    const [data] = useState([
        {
            id: 1,
            catagory: "Movie",
            subCatagory : "Marvel",
            name: "ironman",
            Pimg: "https://wallpapercave.com/wp/wp3405076.jpg",
            Limg: "https://a-static.besthdwallpaper.com/iron-man-3-movie-poster-wallpaper-2560x1440-11921_51.jpg"
        },
        {
            id: 2,
            catagory: "Movie",
            subCatagory : "Marvel",
            name: "antman",
            Pimg: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg",
            Limg: "https://c4.wallpaperflare.com/wallpaper/863/602/374/ant-man-marvel-wallpaper-preview.jpg"
        },
        {
            id: 3,
            catagory: "Movie",
            subCatagory : "Marvel",
            name: "hulk",
            Pimg: "https://m.media-amazon.com/images/M/MV5BMTYxMjcwODA4OV5BMl5BanBnXkFtZTcwODY3NDg5MQ@@._V1_FMjpg_UX1000_.jpg",
            Limg: "https://p4.wallpaperbetter.com/wallpaper/650/931/817/avengers-hulk-incredible-hulk-illustration-wallpaper-preview.jpg"
        },
        {
            id: 4,
            catagory: "Movie",
            subCatagory : "Marvel",
            name: "caption_America",
            Pimg: "https://flxt.tmsimg.com/assets/p9895254_p_v8_an.jpg",
            Limg: "https://wallpaperaccess.com/full/1826377.jpg"
        },
        {
            id: 5,
            catagory: "Movie",
            subCatagory : "Marvel",
            name: "Avenger End Game",
            Pimg: "https://i.pinimg.com/originals/66/bd/9b/66bd9b1f8354a9aa6900dee35bc2a911.jpg",
            Limg: "https://w0.peakpx.com/wallpaper/34/966/HD-wallpaper-the-avengers-avengers-endgame-avengers-avengers-endgame.jpg"
        },
        {
            id: 6,
            catagory: "Movie",
            subCatagory : "Marvel",
            name: "Black Panther",
            Pimg: "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg",
            Limg: "https://staticg.sportskeeda.com/editor/2022/11/69623-16678539031086-1920.jpg"
        },
        {
            id: 7,
            catagory: "Movie",
            subCatagory : "Marvel",
            name: "Spider Man",
            Pimg: "https://e0.pxfuel.com/wallpapers/597/430/desktop-wallpaper-spider-man-no-way-home-phone-spider-man-no-way-home-phone-wallshub-spider-man-no-way-home-phone.jpg",
            Limg: "https://images2.alphacoders.com/280/280472.jpg"
        },
        {
            id: 8,
            catagory: "Serial",
            subCatagory : "starplus",
            name: "Anupma",
            Pimg: "https://metadata-static.plex.tv/3/gracenote/30e630bea33f593bb253850c67c09615.jpg",
            Limg: "https://www.readersfusion.com/wp-content/uploads/2021/06/anupma-cast-story-real-name.jpg"
        },
        {
            id: 9,
            catagory: "Serial",
            subCatagory : "starplus",
            name: "Ye Rista Kya Kahlata Hai",
            Pimg: "https://m.media-amazon.com/images/M/MV5BZDMwM2U2MjktOTY1Ni00MjFjLTk5MTYtODE2Njg5ZmU0OGFjXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
            Limg: "https://m.media-amazon.com/images/M/MV5BOGViOWFlMDEtNGFhNi00NzVmLWE5MTctMWFhMDg4ZDc3OWQ0XkEyXkFqcGdeQXVyNzkyMjc4Nzk@._V1_.jpg"
        },
        {
            id: 10,
            catagory: "Serial",
            subCatagory : "starplus",
            name: "Yeh Hai Mohabbatein",
            Pimg: "https://wallpapercave.com/wp/wp9597541.jpg",
            Limg: "https://m.media-amazon.com/images/M/MV5BOGVkZmQ3ZjItMzkzMi00ZTU3LTk1ODMtOTAyMmE0MDI0NDcyXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg"
        },
        {
            id: 11,
            catagory: "Serial",
            subCatagory : "starplus",
            name: "Ghum Hai Kisikey Pyaar Meiin",
            Pimg: "https://m.media-amazon.com/images/M/MV5BZTBiNzkyNzUtN2FmNy00YTAzLTkxMWEtN2YwMTNkNjdiZjc5XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_FMjpg_UX1000_.jpg",
            Limg: "https://i.ytimg.com/vi/5ulwXq0GGjk/maxresdefault.jpg"
        },
        {
            id: 12,
            catagory: "Serial",
            subCatagory : "starplus",
            name: "Diya Aur Baati Hum",
            Pimg: "https://image3.mouthshut.com/images/imagesp/925667668s.jpg",
            Limg: "https://youtubehindivideos.com/wp-content/uploads/2021/08/Diya-Aur-Baati-Hum-Full-Episodes.jpg"
        },
        {
            id: 13,
            catagory: "Serial",
            subCatagory : "starplus",
            name: "Iss Pyaar Ko Kya Naam Doon",
            Pimg: "https://i.imgur.com/biYiHez.png",
            Limg: "http://images5.fanpop.com/image/photos/31700000/Arushi-iss-pyar-ko-kya-naam-doon-31751905-1920-1080.jpg"
        },
        {
            id: 14,
            catagory: "Serial",
            subCatagory : "starplus",
            name: "Divya-Drishti",
            Pimg: "https://m.media-amazon.com/images/M/MV5BNjEwM2E1OTMtODYzMC00MDhhLWI5MmEtNGQ4NDkxMjQxMTA1XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_.jpg",
            Limg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5447/515447-h.jpg"
        },
        {
            id: 15,
            catagory: "Sport",
            subCatagory : "Football",
            name: "Ind vs Aus",
            Pimg: "https://wallpapercave.com/wp/wp7012466.jpg",
            Limg: "https://www.teahub.io/photos/full/170-1706807_india-end-2018-at-97th-spot-indian-football.jpg"
        },
        {
            id: 16,
            catagory: "Sport",
            subCatagory : "Cricket",
            name: "India vs Srilanka",
            Pimg: "https://pbs.twimg.com/media/FmFf66gaEAAcgdQ?format=jpg&name=small",
            Limg: "https://india.postsen.com/content/uploads/2023/01/10/7c56010a98.jpg"
        },
        {
            id: 17,
            catagory: "Sport",
            subCatagory : "Football",
            name: "India VS Qutar",
            Pimg: "https://pbs.twimg.com/media/E27qYfjXoAIny1X.jpg",
            Limg: "https://wallpaperaccess.com/full/3616013.png"
        },
        {
            id: 18,
            catagory: "Sport",
            subCatagory : "AsiaCup",
            name: "Asia Cup 2022",
            Pimg: "https://www.indiantvinfo.com/media/2022/08/Ind-Vs-Pak-Live-on-DD-Sports.jpg",
            Limg: "https://discover.hotstar.com/wp-content/uploads/2022/08/Asia-Cup-2022-600x300-02.jpg"
        },
        {
            id: 19,
            catagory: "Sport",
            subCatagory : "PopSport",
            name: "Anupma",
            Pimg: "https://metadata-static.plex.tv/3/gracenote/30e630bea33f593bb253850c67c09615.jpg",
            Limg: "https://www.readersfusion.com/wp-content/uploads/2021/06/anupma-cast-story-real-name.jpg"
        },
        {
            id: 20,
            catagory: "Movie",
            subCatagory : "Bollywood",
            name: "Sembi",
            Pimg: "https://m.media-amazon.com/images/M/MV5BZDMwM2U2MjktOTY1Ni00MjFjLTk5MTYtODE2Njg5ZmU0OGFjXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
            Limg: "https://m.media-amazon.com/images/M/MV5BOGViOWFlMDEtNGFhNi00NzVmLWE5MTctMWFhMDg4ZDc3OWQ0XkEyXkFqcGdeQXVyNzkyMjc4Nzk@._V1_.jpg"
        },
        {
            id: 21,
            catagory: "Movie",
            subCatagory : "Bollywood",
            name: "The Night Manager",
            Pimg: "https://wallpapercave.com/wp/wp9597541.jpg",
            Limg: "https://m.media-amazon.com/images/M/MV5BOGVkZmQ3ZjItMzkzMi00ZTU3LTk1ODMtOTAyMmE0MDI0NDcyXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg"
        }
    ])

    return(
        <store.Provider value = {[data]} >
            {props.children}
        </store.Provider>
    )
}

export default ContextApi;