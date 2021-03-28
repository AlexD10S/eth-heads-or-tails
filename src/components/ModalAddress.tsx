import React, {useState} from 'react';
// @ts-ignore
import { Modal, Card, Button, Flex, Box, Heading, Text, Input } from 'rimble-ui';

interface Props {
  isModalOpen: boolean;
  methodToClose: Function;
  methodToContinue: Function;
};

const ModalAddress = (props: Props) => {
    const [friendAddress, setFriendAddress] = useState('');

    function handleChangeAddress(e: any) {
        setFriendAddress(e.target.value);
    }

    const {isModalOpen, methodToClose, methodToContinue} = props;
    return (
        <Modal style={styles.Modal} isOpen={isModalOpen}>
            <Card width={"25rem"} p={0}>
            <Button.Text
                icononly
                icon={"Close"}
                color={"moon-gray"}
                position={"absolute"}
                top={0}
                right={0}
                mt={3}
                mr={3}
                onClick={methodToClose()}
            />

            <Box style={{textAlign: 'center'}}>
                <Heading.h3>Friend Address</Heading.h3>
                <Text>Paste your friend address here.</Text>
            </Box>
            <Input
                type="text"
                style={{width: '90%', marginLeft: '4%'}}
                required={true}
                placeholder="e.g. 0xAc03BB73b6a9e108530AFf4Df5077c2B3D481e5A"
                onChange={(handleChangeAddress)}
            />

            <Flex
                px={12}
                py={12}
                borderTop={1}
                borderColor={"#E8E8E8"}
                justifyContent={"center"}
            >
                <Button.Outline onClick={methodToClose()}>Cancel</Button.Outline>
                <Button onClick={() => methodToContinue(friendAddress)} ml={3} disabled={friendAddress === ''}>Confirm</Button>
            </Flex>
            </Card>
        </Modal>
    );
};

const styles = {
    Modal: {
        textAlign: 'center',
        alignContent: 'center'
    },
}

export default ModalAddress;
