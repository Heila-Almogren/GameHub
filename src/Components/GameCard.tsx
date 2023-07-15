
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import {Game} from "../hooks/useGames";
import PlatformIconsList from "./platformIconsList";


interface Props {
    game: Game
}

function GameCard({game}: Props) {


    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconsList platforms={game.parent_platforms.map(({platform})=> platform)}></PlatformIconsList>
            </CardBody>
        </Card>
    )
}

export default GameCard
