import { Tooltip } from "@chakra-ui/react"

const EthersToolTip = ({children}) => {

    return (
    <Tooltip 
    label='A complete Ethereum wallet implementation and utilities in JavaScript'
    >
        {children}
    </Tooltip>
    )
}

export default EthersToolTip