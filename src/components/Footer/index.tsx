import { Text, HStack, Container } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import {Link} from "@chakra-ui/react";
import React from "react";
import {IBaseProps} from "../../interfaces/props";
import {Trans} from "@lingui/macro";
import {NavLink} from "react-router-dom";

const Footer:React.FC<IBaseProps>=(props:IBaseProps)=>{
  return (
    <FooterContainer maxW="container.xl" centerContent>
      <HStack py={5} wrap="wrap" spacing={6}>

		  <Link href="https://github.com/seedlist/seedlist.github.io">
			  <HStack spacing={2}>
				  <Text fontSize="1xl" fontWeight="">
					  <Trans>Github</Trans>: v1.0
				  </Text>
			  </HStack>
		  </Link>

          <Link href="https://github.com/seedlist/seedlist-interface/blob/main/LICENSE">
			  <HStack spacing={2}>
				  <Text fontSize="1xl" fontWeight="">
					  <Trans>License</Trans>: MIT
				  </Text>
			  </HStack>
          </Link>

          <Link href="https://github.com/seedlist/seedlist-docs/blob/main/protocol/seedlist_en.md">
			  <HStack spacing={2}>
				  <Text fontSize="1xl" fontWeight="">
					 <Trans>Docs</Trans>
				  </Text>
			  </HStack>
          </Link>

          <Link href="https://discord.gg/kQgg5kkpA5">
			  <HStack spacing={2}>
				  <Text fontSize="1xl" fontWeight="">
					  Discord
				  </Text>
			  </HStack>
          </Link>

          <Link href="https://github.com/seedlist/seedlist.github.io/archive/refs/heads/main.zip">
			  <HStack spacing={2}>
				  <Text fontSize="1xl" fontWeight="">
					  <Trans>Download Zip</Trans>
				  </Text>
			  </HStack>
          </Link>

	      <NavLink to="/donate">
		      <HStack spacing={2}>
			      <Text fontSize="1xl" fontWeight="">
				      <Trans>Donate Me </Trans>
			      </Text>
		      </HStack>
	      </NavLink>

      </HStack>
    </FooterContainer>
  );
}


const FooterContainer = styled(Container)`
    position:fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`

export {Footer};