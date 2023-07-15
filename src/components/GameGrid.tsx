import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

function GameGrid() {

    const {games, error, isLoading} = useGames()

    let skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
        {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5
            }} spacing={10} padding='10px'>
                {
                    isLoading ?
                        skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>) :
                        games.map(game=> <GameCard key={game.id} game={game}></GameCard>)}
            </SimpleGrid>
        </>
        )
}

export default GameGrid
