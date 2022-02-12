import React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import ActionSection from './ActionSection'
import IssueList from './IssueList'
import Count from './Count'
const Issues = () => {
    return (
        <Container>
            <Header />
            <ActionSection />
            <Count />
            <IssueList />
        </Container>
    )
}

export default Issues

const Container = styled.div`
    height: 100%;
     
`