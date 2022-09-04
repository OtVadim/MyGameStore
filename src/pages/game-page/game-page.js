import React from "react";
import { GameCover } from "../../components/game-cover";
import { GameGenre } from "../../components/game-genre";
import { useSelector } from "react-redux/es/exports";
import { GameBuy } from "../../components/game-buy";
import './game-page.css';

export const GamePage = () => {
    const game = useSelector(state => state.games.currentGame)

    console.log('game', game)
    if(game) return null

    return(
        <div className="game-page">
            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                    width='90%'
                    height='400px'
                    src={game.video}
                    title="Youtube Video Player"
                    ></iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text"> Popular Tags of this Item: </p>
                    { game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>) }
                    <div className="game-page__buy-game">
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    )
}