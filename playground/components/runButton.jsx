import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { withTheme } from 'styled-components';
import { ActionButton } from './style';
import { FiPlay } from 'react-icons/fi';
import stylePerfectionist from 'style-perfectionist';

const RunButton = () => {
    const { input, setOutput, setFormatting, config } = useContext(AppContext);

    const transformCode = async () => {
        setFormatting(true);
        const output = await stylePerfectionist.process(input, JSON.parse(config));
        setOutput(output.css);
        setFormatting(false);
    };

    return (
        <ActionButton onClick={transformCode}>
            <FiPlay />
        </ActionButton>
    );
};

export default withTheme(RunButton);
