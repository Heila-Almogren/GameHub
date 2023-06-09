import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

function ColorModeSwitch() {

    const {toggleColorMode, colorMode} = useColorMode()

    return (<HStack>
        <Switch isChecked={colorMode==='dark'} colorScheme='green' onChange={toggleColorMode}></Switch>
        <Text>Dark Mode</Text>
    </HStack>)
}

export default ColorModeSwitch