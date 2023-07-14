import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "../hooks/useGames";
import GameCard from "./GameCard";

interface FetchGamesResponse {
    count: number,
    results : Game[]
}

function GameGrid() {

    const {games, error} = useGames()

    // useEffect(()=>{
    //     apiClient.get<FetchGamesResponse>('/games')
    //         .then(res=> setGames(res.data.results))
    //         .catch((err)=> setError(err.message))
    // })

    return (
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5
            }} spacing={10} padding='10px'>
                { games.map(game=> <GameCard key={game.id} game={game}></GameCard>)}
            </SimpleGrid>
        </>
        )
}

export default GameGrid
