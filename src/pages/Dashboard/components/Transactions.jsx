import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import {LiaRupeeSignSolid} from "react-icons/lia"
import {FaBtc} from 'react-icons/fa'
import { Fragment } from "react"


const Transactions = () => {

  const transactions = [
    {
      id: "1",
      icon: LiaRupeeSignSolid,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM"
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM"
    },
    {
      id: "3",
      icon: LiaRupeeSignSolid,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM"
    }
  ]
  return (
    <CustomCard h="full">
    <Text mb="6" fontSize="sm" color="black.8">Recent Transaction</Text>
    <Stack spacing="4">
      {
        transactions.map((transaction,i)=>(
          <Fragment key={transaction.id}>
          {i !== 0 && <Divider/>}
          <Flex gap="4">
            <Grid
            placeItems="center"
            bg="black.5"
            boxSize={10}
            borderRadius="full" 
            >
              <Icon as={transaction.icon}/>
            </Grid>
            <Flex justify="space-between" w="full">
              <Stack>
                <Text>{transaction.text}</Text>
                <Text>{transaction.timestamp}</Text>
              </Stack>
              <Text>{transaction.amount}</Text>
            </Flex>
          </Flex>
          </Fragment>

        ))
      }
    </Stack>
    <Button w="full" mt="6" colorScheme="gray">View All</Button>
      
    </CustomCard>
  )
}

export default Transactions
