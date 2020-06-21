import React, { Component } from 'react';
import {
    Pane,
    // eslint-disable-next-line no-unused-vars
    Text,
    Link,
    Strong,
    Code,
} from 'evergreen-ui';

const Brk = () => (
    <Strong size={500} style={{ margin: '0 .5rem' }}>
        |
    </Strong>
);

export default class Footer extends Component {
    render() {
        return (
            <Pane
                style={{
                    position: 'fixed',
                    width: '100%',
                    bottom: 0,
                    height: '2rem',
                }}
            >
                <Pane
                    display="flex"
                    paddingX={16}
                    background="tint2"
                    style={{ height: 'inherit' }}
                >
                    <Pane flex={1} alignItems="center" display="flex">
                        <Text>
                            Created by{' '}
                            <Link href="https://twitter.com/__ANIX__">
                                Aniketh Saha
                            </Link>
                            Using <Code>NextJs</Code> And{' '}
                            <Code>evergreen-ui</Code>
                            <Brk />
                            <Code>style-perfectionist</Code> packages:{' '}
                            <Link href="https://github.com/anikethsaha/style-perfectionist">
                                style-perfectionist <Code>v0.3.0</Code>
                            </Link>
                            <Brk />
                        </Text>
                    </Pane>
                </Pane>
            </Pane>
        );
    }
}
