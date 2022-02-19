import SlideFadeOnScroll from "./SlideFadeOnScroll"
import { Image } from "@chakra-ui/react"
import solidity from '../img/solidity.png'
import theGraph from "../img/theGraph.png"
import metamask2 from '../img/metamask2.jpeg'
import hardhat from '../img/hardhat.png'
import ethers from '../img/ethers-js.png'
import waffle from '../img/waffle.png'
import javascript from '../img/javascript.png'
import chakra from '../img/chakra.png'
import nodejs from '../img/nodejs.png'
import prisma from '../img/prisma.png'
import react from '../img/react.png'

export const solidit = () => {
    return (
        <a href="https://docs.soliditylang.org/en/v0.8.11/#" textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Image src={solidity} borderRadius='full' alt="solidity" objectFit="contain" />
        </a>
    )
}

export const theGrap = () => {
    return (
        <a href="https://thegraph.com/en/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <SlideFadeOnScroll>
                <Image mt={-10} borderRadius='full' src={theGraph} alt="metamask2" objectFit="contain" boxShadow='dark-lg'/>
            </SlideFadeOnScroll>
        </a>

    )
}

export const metamas = () => {
    return (
        <a href="https://metamask.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <SlideFadeOnScroll>
                <Image mt={isLessThan375 ? 5 : 10} borderRadius='full' src={metamask2} alt="metamask2" objectFit="contain" boxShadow='dark-lg'/>
            </SlideFadeOnScroll>
        </a>
    )
}

export const hardha = () => {
    return (
        <a href="https://hardhat.org/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <SlideFadeOnScroll>
                <Image mt={-10}  borderRadius='full' src={hardhat} alt="hardhat" objectFit="contain" boxShadow='dark-lg'/>
            </SlideFadeOnScroll>
        </a>
    )
}

export const warffl = () => {
    return (
        <a href="https://getwaffle.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <SlideFadeOnScroll>
            <Image mt={-10} bg='white' borderRadius='full' src={waffle} alt="waffle" objectFit="contain" boxShadow='dark-lg'/>
            </SlideFadeOnScroll>
        </a>
    )
}

export const ether = () => {
    return (
        <a href="https://docs.ethers.io/v5/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <SlideFadeOnScroll >
            <Image  borderRadius='full' src={ethers} alt="ethers" objectFit="contain" boxShadow='dark-lg'/>
            </SlideFadeOnScroll>
        </a>
    )
}

export const javascrip = () => {
    return (
        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Image mt={isLessThan375 ? '' :-10} src={javascript} alt="javascript" objectFit="contain" />
        </a>
    )
}
// export const ethers = () => {
//     return (
//         <a href="https://docs.ethers.io/v5/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
//             <SlideFadeOnScroll >
//             <Image  borderRadius='full' src={ethers} alt="ethers" objectFit="contain" boxShadow='dark-lg'/>
//             </SlideFadeOnScroll>
//         </a>
//     )
// }
// export const ethers = () => {
//     return (
//         <a href="https://docs.ethers.io/v5/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
//             <SlideFadeOnScroll >
//             <Image  borderRadius='full' src={ethers} alt="ethers" objectFit="contain" boxShadow='dark-lg'/>
//             </SlideFadeOnScroll>
//         </a>
//     )
// }
// export const ethers = () => {
//     return (
//         <a href="https://docs.ethers.io/v5/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
//             <SlideFadeOnScroll >
//             <Image  borderRadius='full' src={ethers} alt="ethers" objectFit="contain" boxShadow='dark-lg'/>
//             </SlideFadeOnScroll>
//         </a>
//     )
// }
// export const ethers = () => {
//     return (
//         <a href="https://docs.ethers.io/v5/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
//             <SlideFadeOnScroll >
//             <Image  borderRadius='full' src={ethers} alt="ethers" objectFit="contain" boxShadow='dark-lg'/>
//             </SlideFadeOnScroll>
//         </a>
//     )
// }

