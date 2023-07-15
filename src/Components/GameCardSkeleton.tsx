import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

interface Props {

}

function GameCardSkeleton({}: Props) {


    return (
        <>
        <Card width='300px' borderRadius={10}>
            <Skeleton height='200px'></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
        </>
    )
}

export default GameCardSkeleton
